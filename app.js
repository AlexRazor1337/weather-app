require('dotenv').config();
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

geocode('Kiev', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

weather('50.25', '30.5', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.current.weather_descriptions + '. It is currently ' + data.current.temperature + ' degrees out. There is a ' + data.current.precip + '% chance of rain!');
    }
});