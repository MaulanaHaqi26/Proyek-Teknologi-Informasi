const express = require('express');
const http = require('http');

// Setup express
const app = express();

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
