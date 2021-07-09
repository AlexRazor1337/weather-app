require('dotenv').config();
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

geocode('Kiev', (error, data) => {
    if (error) return console.log(error);

    weather(data.latitude, data.longitude, (error, weather_data) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data.name + ': ' + weather_data.current.weather_descriptions + '. It is currently ' + weather_data.current.temperature + ' degrees out. There is a ' + weather_data.current.precip + '% chance of rain!');
        }
    });
});

