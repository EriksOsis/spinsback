// const API_TOKEN = '450f8ba0b0de08b21e14be07dac1e1d3';  // Replace with your Keitaro API token
// const BASE_URL = 'http://139.59.72.61/admin_api/v1';  // Ensure this is your correct Keitaro domain

// async function getConversionData() {
//   const url = `${BASE_URL}/conversions/log`;  // Ensure the endpoint is correct

//   // Define the request body for the POST request with necessary parameters
//   const requestBody = {
//     "range": {
//       "from": "2023-01-01",
//       "to": "2024-08-28",
//       "timezone": "UTC"
//     },
//     "limit": 0,  // Retrieve all matching records
//     "offset": 0,
//     "columns": [
//       "sub_id",
//       "status",
//       "conversion_id",
//       "sale_datetime",
//       "revenue"
//     ],
//     "filters": [
//       {
//         "name": "sub_id",
//         "operator": "equals",
//         "expression": "3jr7v6leov"  // Replace with the actual sub_id you want to check
//       }
//     ],
//     "sort": [
//       {
//         "name": "sub_id",
//         "order": "ASC"
//       }
//     ]
//   };

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Api-Key': API_TOKEN,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(requestBody)
//     });

//     if (!response.ok) {
//       throw new Error(Error `fetching data: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json();
//     console.log('Conversion Data:', data);

//     // Output all conversions to understand what is being returned
//     if (data.rows.length > 0) {
//       console.log('Conversions found:', data.rows);
//     } else {
//       console.log('No conversions found for sub_id: 3jr7v6leov');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// getConversionData();