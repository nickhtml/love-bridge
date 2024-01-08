const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Set the static folder where your HTML, CSS, and client-side JavaScript reside

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
