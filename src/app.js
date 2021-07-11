require('dotenv').config();
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

const location = process.argv[2];
if (!location) return console.log('Specify a location!');
else {
    geocode(location, (error, {
        name,
        latitude,
        longitude
    } = {}) => {
        if (error) return console.log(error);

        weather(latitude, longitude, (error, {
            current
        }) => {
            if (error) {
                console.log(error);
            } else {
                console.log(name + ': ' + current.weather_descriptions + '. It is currently ' + current.temperature + ' degrees out. There is a ' + current.precip + '% chance of rain!');
            }
        });
    });
}