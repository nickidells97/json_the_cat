const request = require('request');
const breed = process.argv[2];

if (breed === undefined) {
  console.log(`No meows found`);
  return;
}
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});