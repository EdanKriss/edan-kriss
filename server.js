const express = require('express');
const path = require('path');
const port = process.env.PORT || 8088;
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));
// app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port);
console.log("server listening: " + port);