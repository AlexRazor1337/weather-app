const request = require('postman-request');
require('dotenv').config();

const weather_url = 'http://api.weatherstack.com/current?access_key=' + process.env.weather_api_key + '&query=37.86,-122.22&units=m';
request({"url": weather_url, "json": true}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (body.error){
        console.log(body.error)
    } else {
        console.log(body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain!');
    }
});

let search_term = 'Kiev';
const geo_url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(search_term) + '.json?limit=1&access_token=' + process.env.geo_api_key;
request({"url": geo_url, "json": true}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to geo service!')
    } else if (body.features.length == 0) {
        console.log('Not found')
    } else {
        console.log(body.features[0].place_name, body.features[0].center);
    }
});