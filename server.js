const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: 'https://spinsmines.netlify.app', // Replace with your Netlify domain
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Telegram Bot Token (Replace with your bot's token)
const TELEGRAM_TOKEN = '7239055423:AAEnRjIEpc6PsKLE3iwAo2hZUqRsnVBkMcc'; // Replace with your bot token

// Channel ID from which the bot will read messages
const CHANNEL_ID = '-1002243158881'; // Replace with your channel ID or username

// Initialize the Telegram bot
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// Function to search messages in the Telegram channel
async function fetchChannelMessages(userId) {
    try {
        // Fetch updates including channel posts
        const updates = await bot.getUpdates({
            allowed_updates: ['channel_post', 'message'], // Ensure channel posts are included
        });

        console.log('Fetched updates:', updates); // Debug: Log all fetched updates

        // Extract messages specifically from the channel
        const channelMessages = updates
            .map(update => update.channel_post || update.message)
            .filter(message => message && message.chat && message.chat.id.toString() === CHANNEL_ID);

        console.log('Channel messages:', channelMessages); // Debug: Log the filtered channel messages

        // Search for the user ID in messages
        const isUserIdValid = channelMessages.some(message => {
            const text = message.text || '';
            const match = text.split(':')[0]; // Extract the part before ':'
            console.log(`Checking message: ${text} | Extracted ID: ${match}`); // Debug: Log each message check
            return match === userId; // Check if it matches the user ID
        });

        console.log(`Is user ID ${userId} valid?`, isUserIdValid); // Debug: Log the result of the check

        return isUserIdValid;
    } catch (error) {
        console.error('Error fetching messages:', error);
        return false;
    }
}

// Listen for the /start command and send a welcome message with an image and button
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Send an image with a caption and a button to open the mini-app
    bot.sendPhoto(chatId, 'https://imgur.com/a/u8Sij09', {
        caption: `Welcome to The SpinsCasino Mines Bot!🤖\nPress "PLAY NOW" to start playing👇!`,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'PLAY NOW',
                        url: 't.me/SpinsMines_bot/spinsmines', // Update with correct URL
                    },
                ],
            ],
        },
    }).catch((error) => {
        console.error('Error sending photo:', error);
    });
});

// Endpoint to validate the User ID by searching in the channel messages
app.post('/api/check-sub-id', async (req, res) => {
    const { userId } = req.body;

    try {
        // Search for the User ID in the channel messages
        const isValid = await fetchChannelMessages(userId);

        if (isValid) {
            res.json({ valid: true });
        } else {
            res.json({ valid: false });
        }
    } catch (error) {
        console.error('Error validating User ID:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// const TelegramBot = require('node-telegram-bot-api'); // Import Telegram Bot API

// const app = express();
// const PORT = process.env.PORT || 5000;

// const corsOptions = {
//     origin: 'https://spinsmines.netlify.app', // Replace with your Netlify domain
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
// };

// app.use(cors(corsOptions));
// app.use(bodyParser.json());

// const API_URL = 'http://139.59.72.61/admin_api/v1/conversions/log';
// const API_TOKEN = '450f8ba0b0de08b21e14be07dac1e1d3';

// // Telegram Bot Token (Replace with your bot's token)
// const TELEGRAM_TOKEN = '7239055423:AAEnRjIEpc6PsKLE3iwAo2hZUqRsnVBkMcc'; // Replace with the token from BotFather

// // URL of the image you want to send with the welcome message
// const IMAGE_URL = "https://imgur.com/a/u8Sij09"; // Replace with your image URL

// // URL to open your Telegram mini-app
// const MINI_APP_URL = 't.me/SpinsMines_bot/spinsmines'; // Replace with your mini-app deep link

// // Initialize the Telegram bot
// const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// // Listen for the /start command and send a welcome message with an image and button
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;

//     // Send an image with a caption and a button to open the mini-app
//     bot.sendPhoto(chatId, IMAGE_URL, {
//         caption: `Welcome to The SpinsCasino Mines Bot!🤖\nPress "PLAY NOW" to start playing👇!`,
//         reply_markup: {
//             inline_keyboard: [
//                 [
//                     {
//                         text: 'PLAY NOW',
//                         url: MINI_APP_URL,
//                     },
//                 ],
//             ],
//         },
//     }).catch((error) => {
//         console.error('Error sending photo:', error);
//     });
// });

// app.post('/api/check-sub-id', async (req, res) => {
//     const { userId } = req.body; // Assuming userId is sent from the frontend
//     const todayDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

//     const requestBody = {
//         range: { from: '2023-01-01', to: todayDate, timezone: 'UTC' },
//         limit: 0, // Retrieve all matching records
//         offset: 0,
//         columns: [
//             'sub_id',
//             'status',
//             'conversion_id',
//             'sale_datetime',
//             'revenue',
//         ],
//         filters: [
//             {
//                 name: 'sub_id',
//                 operator: 'equals',
//                 expression: userId, // Use the userId received from the frontend
//             },
//         ],
//         sort: [
//             {
//                 name: 'sub_id',
//                 order: 'ASC',
//             },
//         ],
//     };

//     const headers = {
//         'Content-Type': 'application/json',
//         'Api-Key': API_TOKEN,
//     };

//     try {
//         const response = await fetch(API_URL, {
//             method: 'POST',
//             headers,
//             body: JSON.stringify(requestBody),
//         });

//         if (!response.ok) {
//             return res.status(response.status).json({ error: `Failed to fetch data: ${response.statusText}` });
//         }

//         const data = await response.json();
//         console.log('Conversion Data:', data); // Debug: Log the response data

//         // Check if conversions are found and respond accordingly
//         if (data.rows && data.rows.length > 0) {
//             console.log('Conversions found:', data.rows); // Log the conversions
//             res.json({ valid: true, conversions: data.rows }); // Send back a positive result with the conversions
//         } else {
//             console.log('No conversions found for sub_id:', userId);
//             res.json({ valid: false }); // Send back a negative result
//         }
//     } catch (error) {
//         console.error('Error:', error.message);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
