// Main entry point for the server
import express from 'express';

const app = express();

// Other initial setups can go here
app.listen(3000, () => console.log('Server running on port 3000'));
