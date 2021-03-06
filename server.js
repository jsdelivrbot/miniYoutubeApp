const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log('cannot start server:', err);
    } else {
        console.log('server started...');
    }
});