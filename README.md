# liri-node-app
# About liri
LIRI is like SIRI (from iOS). It is a command line node app that takes in parameters and outputs data. The user guess four commands.
  * concert-this
  * spotify-this-song
  * movie-this
  * do-what-it-says
# How to use liri
1. Open Gitbash or Terminal
1. cd to the folder containing the liri.js file
1. run command
   1. concert-this command
   `node liri.js concert-this <artist/band name>`
   ![conert-this screenshot](/liri-screenshots/concert-this.png)
    Format: ![Alt Text](url)
   1. spotify-this-song command
   `node liri.js spotify-this-song <song name>`
   ![spotify-this-song screenshot](/liri-screenshots/spotify-this-song.png)
    Format: ![Alt Text](url)
    1. movie-this command
   `node liri.js movie-this <movie name>`
   ![movie-this screenshot](/liri-screenshots/movie-this.png)
     Format: ![Alt Text](url)
    1. do-what-it-says command
   `node liri.js do-what-it-says`
   ![do-what-it-says screenshot](/liri-screenshots/do-what-it-says.png)
     Format: ![Alt Text](url)
# Technologies Used
 * Node
 * Javascript
 * NPM Packages
   * dotenv
   * fs
   * axios
   * node-spotify-api
   * moment
 * APIs
   * Bands in Town
   * OMDB
