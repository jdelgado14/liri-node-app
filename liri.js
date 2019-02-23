require("dotenv").config();

var keys = require("./js/keys");

var Spotify = require("node-spotify-api");

var moment = require('moment');

var fs = require("fs");

var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

function userCommand(command, userInput) {
    switch (command) {
        case 'concert-this':
            concert(userInput);
            break;
        case 'spotify-this-song':
            song(userInput);
            break;
        case 'movie-this':
            omdb(userInput);
            break;
        case 'do-what-it-says':
            random();
    }
}

function concert(artist) {
    var artist = userInput;
    var bandUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(bandUrl).then(function (response) {
        var jsonData = response.data[0]
        var artistInfo = [
            "Venue name: " + jsonData.venue.name,
            "Location: " + jsonData.venue.city,
            "Date: " + jsonData.moment(datetime).format("MM-DD-YYYY")
        ].join("\n\n");
        console.log(artistInfo);
    })
}

function song(title) {
    var spotify = new Spotify(keys.spotify);

    if (!title) {
        title = "The Sign";
    } 
    spotify.search({type: 'track', query: title}, function (err, data){
        if (err) throw err;
    },

    console.log("Artist Name: "+ data.tracks.item[0].album.artists[0].name + "\r\n"),
    console.log("Song Name: "+ data.tracks.item[0].name + "\r\n"),
    console.log("Song Preview Link: "+ data.tracks.item[0].href + "\r\n"),
    console.log("Album: "+ data.tracks.item[0].album.name + "\r\n")
)};

function omdb(movie) {
    if (!movie) {
        movie = "Mr. Nobody";
    }
    var movieUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=266dd74c";

    axios.get(movieUrl).then(function (response) {
        var jsonData = response.data[0]
        var movieInfo = [
            "Title: " + jsonData.Title,
            "Release Year: " + jsonData.Year,
            "IMDB Rating: " + jsonData.imdbRating,
            "Rotten Tomatoes Rating: " + jsonData.Ratings[1].value,
            "Country where Produced: " + jsonData.Country,
            "Language: " + jsonData.Language,
            "Plot: " + jsonData.Plot,
            "Actors: " + jsonData.Actors
        ].join("\n\n");
        console.log(movieInfo);
    })

}

function random() {
    fs.readFile("random.txt", "utf8", function(err, data){
        if (err) {
            return (err);
        } else {
            var randomData = data.split(",");
            userCommand(randomData[0], randomData[1]);
        }
    })
}

userCommand(command, userInput);