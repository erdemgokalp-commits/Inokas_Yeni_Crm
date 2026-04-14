const express = require('express');
const path = require('path');
const app = express();

// 1. Tell the server to share everything in your "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// 2. Set the default page to your index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 3. Start the server using Railway's port or 3000 as a backup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});