const request = require('postman-request');
require('dotenv').config();

const url = 'http://api.weatherstack.com/current?access_key=' + process.env.weather_api_key + '&query=37.86,-122.22&units=m';
request({"url": url, "json": true}, (error, response, body) => {
    console.log(body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain!');
});

let search_term = 'Kiev';
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(search_term) + '.json?limit=1&access_token=' + process.env.geo_api_key;
request({"url": url, "json": true}, (error, response, body) => {
    console.log(body.features[0].place_name, body.features[0].center);
});