const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use("/static", express.static(path.join(__dirname, "node_modules/materialize-css/dist")));

const mockData = [
    { name: "Artist 1", songs: 50, listeners: 1000000, albums: ["Album 1", "Album 2", "Album 3"], topSongs: ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"] }
];

app.get("/", (req, res) => {
    let html = "<!DOCTYPE html><html><head><link rel=\"stylesheet\" href=\"/static/css/materialize.min.css\"></head><body><ul class=\"collection\">";
    mockData.forEach(artist => {
        html += `<li class=\"collection-item avatar\"><span class=\"title\">${artist.name}</span><p>Number of songs: ${artist.songs}<br>Listeners: ${artist.listeners}</p><a href=\"#!\" class=\"secondary-content\">Top 3 Albums: ${artist.albums.join(", ")}</a></li>`;
    });
    html += "</ul></body></html>";
    res.send(html);
});

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});
