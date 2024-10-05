// Load environment variables from the .env file
require('dotenv').config();

// Import the Express app from ./src/app
const app = require('./src/app');

// Set the port from environment variables or default to 3001
const PORT = process.env.PORT || 3001;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

