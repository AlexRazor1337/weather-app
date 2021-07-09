require('dotenv').config();
const request = require('postman-request');
const geocode = require('./utils/geocode');


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

geocode('Kiev', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.name, data.center);
    }
});