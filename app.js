const request = require('postman-request');
require('dotenv').config();

const url = 'http://api.weatherstack.com/current?access_key=' + process.env.api_key + '&query=37.86,-122.22';
request(url, (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data.current);
});