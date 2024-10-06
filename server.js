// 7239055423:AAEnRjIEpc6PsKLE3iwAo2hZUqRsnVBkMcc
// -1002470251856
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
const ADMIN_USER_ID = 926460821; // Replace with your own admin ID

// Firebase Initialization
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore(); // Firestore database instance


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

// Telegram Bot listener for the /broadcast command
bot.onText(/\/broadcast (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const messageToBroadcast = match[1]; // Get the message to broadcast

    if (chatId === ADMIN_USER_ID) { // Only the admin can broadcast
        const userIds = await getAllUsers(); // Get all registered users
        userIds.forEach(userId => {
            bot.sendMessage(userId, messageToBroadcast).catch(error => {
                console.error(`Error sending broadcast to ${userId}:`, error);
            });
        });
        bot.sendMessage(chatId, "Message successfully broadcasted to all users.");
    } else {
        bot.sendMessage(chatId, "You are not authorized to broadcast.");
    }
});

// API endpoint for checking sub_id
app.post('/api/check-sub-id', async (req, res) => {
    const { userId } = req.body; // Extract userId from the request body
    const todayDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // Request body for the external API
    const requestBody = {
        range: { from: '2023-01-01', to: todayDate, timezone: 'UTC' },
        limit: 0, // Retrieve all matching records
        offset: 0,
        columns: [
            'sub_id',
            'status',
            'conversion_id',
            'sale_datetime',
            'revenue',
        ],
        filters: [
            {
                name: 'sub_id',
                operator: 'equals',
                expression: userId, // Use the userId received from the frontend
            },
        ],
        sort: [
            {
                name: 'sub_id',
                order: 'ASC',
            },
        ],
    };

    // API headers
    const headers = {
        'Content-Type': 'application/json',
        'Api-Key': API_TOKEN, // API token for authentication
    };

    try {
        // Make the API request
        const response = await fetch(API_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(requestBody), // Send request body as JSON
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: `Failed to fetch data: ${response.statusText}` }); // Handle failed response
        }

        const data = await response.json(); // Parse the response JSON
        console.log('Conversion Data:', data); // Debugging: Log the API response

        // Check if any conversions were found and respond accordingly
        if (data.rows && data.rows.length > 0) {
            console.log('Conversions found:', data.rows); // Log found conversions
            res.json({ valid: true, conversions: data.rows }); // Return the conversions
        } else {
            console.log('No conversions found for sub_id:', userId); // Log no conversions found
            res.json({ valid: false }); // Return a negative result if no conversions
        }
    } catch (error) {
        console.error('Error:', error.message); // Log errors
        res.status(500).json({ error: 'Server error' }); // Return server error status
    }
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
