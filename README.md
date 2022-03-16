# CatFacts
Learn about cats!

# Getting Started
The following instructions will allow you to get a copy of this project running on your local machine:

Before starting, ensure you have met the following requirements: You have npm and node installed on your machine. If not, follow the instructions from the following link: 
npm: https://www.npmjs.com/get-npm 
node: https://nodejs.org/en/download/

Fork this repository and clone it to your local machine. Open the project in an IDE to get started.

The project consists of two folders: client and server.

Open up two terminals. Cd into the server folder (`cd server`) in one terminal and cd into client (`cd client`) in the other.

Run `npm install` in each terminal to install dependencies.

After all dependencies have been installed, run `npm start` in both terminals to start the node server and react front-end. Open the browser and navigate to `localhost:3000`.

# Using the app
The webpage fetches 10 catfacts from the free Cat Fact API (see https://catfact.ninja/).

- Click `Get More Cat Facts` to get another set of 10 facts.
- You can click the `Save Fact` button to save a fact to your browser's localStorage.
- Click `Show Saved Facts` to see all of the facts you've saved.
