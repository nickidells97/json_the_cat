const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  if (breedName === undefined) {
    return `No cats found`;
  }
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('breed not found', null);
      return;
    }
    callback(null, data[0].description);
    return;
  });
};

module.exports = { fetchBreedDescription };