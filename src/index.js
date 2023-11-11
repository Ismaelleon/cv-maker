const express = require('express'),
    path = require('path');

const app = express();

// settings
app.use(express.static(path.join(__dirname, 'public')));

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
