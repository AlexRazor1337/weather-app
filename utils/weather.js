const request = require('postman-request');

const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + process.env.weather_api_key + '&query=' + latitude + ',' + longitude + '&units=m';
    request({"url": url, "json": true}, (error, _, body) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error){
            callback(body.error, undefined);
        } else {
            callback(undefined, body);
        }
    });
}

module.exports = weather;