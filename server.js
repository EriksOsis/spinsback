const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://spinsmines.netlify.app', // Replace with your Netlify domain
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const API_URL = 'http://139.59.72.61/admin_api/v1/conversions/log';
const API_TOKEN = '450f8ba0b0de08b21e14be07dac1e1d3';

app.post('/api/check-sub-id', async (req, res) => {
  const { userId } = req.body;  // Assuming userId is sent from the frontend

  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  const requestBody = {
    range: { from: '2023-01-01', to: today, timezone: 'UTC' },
    limit: 0,  // Retrieve all matching records
    offset: 0,
    columns: [
      "sub_id",
      "status",
      "conversion_id",
      "sale_datetime",
      "revenue"
    ],
    filters: [
      {
        name: 'sub_id',
        operator: 'equals',
        expression: userId // Use the userId received from the frontend
      }
    ],
    sort: [
      {
        name: 'sub_id',
        order: 'ASC'
      }
    ]
  };

  const headers = {
    'Content-Type': 'application/json',
    'Api-Key': API_TOKEN,
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `Failed to fetch data: ${response.statusText}` });
    }

    const data = await response.json();
    console.log('Conversion Data:', data); // Debug: Log the response data

    // Check if conversions are found and have a "sale" status
    const hasSaleStatus = data.rows?.some(row => row.status === 'sale');

    if (data.rows && data.rows.length > 0 && hasSaleStatus) {
      console.log('Conversions found with sale status:', data.rows); // Log the conversions with sale status
      res.json({ valid: true, hasSale: true, conversions: data.rows }); // Send back a positive result with the conversions
    } else if (data.rows && data.rows.length > 0) {
      console.log('Conversions found without sale status:', data.rows);
      res.json({ valid: true, hasSale: false, conversions: data.rows });
    } else {
      console.log('No conversions found for sub_id:', userId);
      res.json({ valid: false }); // Send back a negative result
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
