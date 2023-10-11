const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const artists = require('./mockData');

app.use('/static', express.static(path.join(__dirname, 'node_modules/materialize-css/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});
