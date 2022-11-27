
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      const errMsg = "that cat doesn't exist!";
      callback(errMsg, null);
    } else {
      callback(null, (data[0]["description"]));
    }
  });
};

module.exports = { fetchBreedDescription };