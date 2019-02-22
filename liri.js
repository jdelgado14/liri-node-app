require("dotenv").config();

var keys = require("./js/keys");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var moment = require('moment');

var fs = require("fs");

var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

function userCommand(command, input) {
    if (command === "concert-this"){
        getBandsInTown(input)
    } else if (command === "spotify-this-song") {
        getSpotify(input)
    } else if (command === "movie-this") {
        getOMDB(input)
    } else if (command === "do-what-it-says") {
        getRandom()
    }
}

function concert() {

}

function song(title) {
    if (!title) {
        title = "The Sign";
    } else {
        
    }
}

function doThis() {

}