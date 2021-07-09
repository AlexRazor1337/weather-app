const request = require('postman-request');
require('dotenv').config();

const weather_url = 'http://api.weatherstack.com/current?access_key=' + process.env.weather_api_key + '&query=37.86,-122.22&units=m';
// request({"url": weather_url, "json": true}, (error, response, body) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (body.error){
//         console.log(body.error)
//     } else {
//         console.log(body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain!');
//     }
// });

let search_term = 'Kiev';
const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?limit=1&access_token=' + process.env.geo_api_key;
    let search_term = 'Kiev';
    request({"url": url, "json": true}, (error, _, body) => {
        if (error) {
            callback('Unable to connect to geo service!', undefined)
        } else if (body.features.length == 0) {
            callback('Location not found', undefined)
        } else {
            callback(undefined, body)
        }
    });
}

geocode(search_term, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.features[0].place_name, data.features[0].center);
    }
});