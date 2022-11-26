const args = (process.argv).slice(2);
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else {
    try {
      const data = JSON.parse(body);
      console.log(data[0]["description"]);
    } catch (error) {
      console.log("dat ain't a cat, try again bro");
    }
  }
});