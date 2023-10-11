const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();
const PORT = 3000;

const spotifyApi = new SpotifyWebApi({
    clientId: 'YOUR_SPOTIFY_CLIENT_ID',
    clientSecret: 'YOUR_SPOTIFY_CLIENT_SECRET',
    redirectUri: 'YOUR_SPOTIFY_REDIRECT_URI'
});

app.get('/', (req, res) => {
    // Logic to retrieve data from Spotify will go here
    res.send('Top 10 listened artists will be displayed here');
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});
