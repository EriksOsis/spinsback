const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const TelegramBot = require('node-telegram-bot-api'); // Import Telegram Bot API
const admin = require('firebase-admin'); // Firebase Admin for Firestore

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
    origin: 'https://spinsmines.netlify.app', // Replace with your Netlify domain
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions)); // Enable CORS
app.use(bodyParser.json()); // Use body parser for handling JSON requests

// API configuration for external service
const API_URL = 'http://139.59.72.61/admin_api/v1/conversions/log';
const API_TOKEN = '450f8ba0b0de08b21e14be07dac1e1d3'; // Replace with actual API token

// Telegram Bot Token (Replace with your bot's token from BotFather)
const TELEGRAM_TOKEN = '7239055423:AAEnRjIEpc6PsKLE3iwAo2hZUqRsnVBkMcc'; // Replace with your actual token

// URL of the image to be sent with the welcome message
const IMAGE_URL = "https://imgur.com/a/u8Sij09"; // Replace with your actual image URL

// URL to open your Telegram mini-app
const MINI_APP_URL = 't.me/SpinsMines_bot/spinsmines'; // Replace with your actual mini-app link

// Initialize the Telegram bot
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// Admin User ID (Replace with your own Telegram User ID)
const ADMIN_USER_ID = 631028808; // Replace with your own admin ID

// Firebase Initialization
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore(); // Firestore database instance

// Store broadcast data temporarily
let broadcastData = {};

// Function to add a user to Firestore
async function addUser(userId) {
    const userRef = db.collection('users').doc(userId.toString());
    await userRef.set({ id: userId });
    console.log(`User ${userId} added to Firestore`);
}

// Function to get all users from Firestore
async function getAllUsers() {
    const snapshot = await db.collection('users').get();
    const users = snapshot.docs.map(doc => doc.data());
    return users.map(user => user.id); // Return array of user IDs
}

// Telegram Bot listener for the /start command
bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;

    // Store the user in Firestore
    await addUser(chatId);

    // Send image with caption and an inline button to start the mini-app
    bot.sendPhoto(chatId, IMAGE_URL, {
        caption: `Welcome to The SpinsCasino Mines Bot!🤖\nPress "PLAY NOW" to start playing👇!`,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'PLAY NOW',
                        url: MINI_APP_URL, // Link to the mini-app
                    },
                ],
            ],
        },
    }).catch((error) => {
        console.error('Error sending photo:', error); // Error handling
    });
});

// Telegram Bot listener for the /broadcast command to start the process
bot.onText(/\/broadcast$/, async (msg) => {
    const chatId = msg.chat.id;

    if (chatId === ADMIN_USER_ID) {
        broadcastData[chatId] = { step: 'waiting_for_message' }; // Set the step to waiting for a message
        bot.sendMessage(chatId, "Send me the message you wish to broadcast.");
    } else {
        bot.sendMessage(chatId, "You are not authorized to broadcast.");
    }
});

// Handle incoming messages to capture the broadcast message from the admin
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    // Check if the admin is sending a message for broadcasting
    if (chatId === ADMIN_USER_ID && broadcastData[chatId] && broadcastData[chatId].step === 'waiting_for_message') {
        // Save the message (this could include text, photos, videos, video notes, etc.)
        broadcastData[chatId] = { message: msg, step: 'confirming' };

        // Send the message back to the admin user first
        if (msg.text) {
            await bot.sendMessage(chatId, msg.text, { reply_markup: msg.reply_markup });
        } else if (msg.photo) {
            await bot.sendPhoto(chatId, msg.photo[0].file_id, { caption: msg.caption, reply_markup: msg.reply_markup });
        } else if (msg.video) {
            await bot.sendVideo(chatId, msg.video.file_id, { caption: msg.caption, reply_markup: msg.reply_markup });
        } else if (msg.video_note) {
            await bot.sendVideoNote(chatId, msg.video_note.file_id);
        }

        // Send the confirmation message with Approve and Decline buttons
        bot.sendMessage(chatId, "Is this the message you want to broadcast?", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Approve✅', callback_data: 'approve_broadcast' }],
                    [{ text: 'Decline❌', callback_data: 'decline_broadcast' }]
                ]
            }
        });
    }
});

// Handle the Approve/Decline callback actions
bot.on('callback_query', async (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;

    if (chatId === ADMIN_USER_ID && broadcastData[chatId]) {
        if (data === 'approve_broadcast') {
            const messageToBroadcast = broadcastData[chatId].message;

            // Fetch all users to broadcast
            const userIds = await getAllUsers();

            // Broadcast the message in its exact format to all users
            userIds.forEach(userId => {
                if (messageToBroadcast.text) {
                    bot.sendMessage(userId, messageToBroadcast.text, { reply_markup: messageToBroadcast.reply_markup });
                } else if (messageToBroadcast.photo) {
                    bot.sendPhoto(userId, messageToBroadcast.photo[0].file_id, { caption: messageToBroadcast.caption, reply_markup: messageToBroadcast.reply_markup });
                } else if (messageToBroadcast.video) {
                    bot.sendVideo(userId, messageToBroadcast.video.file_id, { caption: messageToBroadcast.caption, reply_markup: messageToBroadcast.reply_markup });
                } else if (messageToBroadcast.video_note) {
                    bot.sendVideoNote(userId, messageToBroadcast.video_note.file_id);
                }
            });

            // Notify the admin that the message was broadcasted
            bot.sendMessage(chatId, "Message successfully broadcasted to all users.");
            delete broadcastData[chatId]; // Clear the data
        } else if (data === 'decline_broadcast') {
            // Notify the admin that the broadcast was cancelled
            bot.sendMessage(chatId, "Broadcast cancelled. Send /broadcast to start again.");
            delete broadcastData[chatId]; // Clear the data
        }
    }
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
