const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

const app = express();
require('dotenv').config();

const public = path.join(__dirname, '..', 'public');
const views = path.join(__dirname, '..', 'templates/views');
const partials = path.join(__dirname, '..', 'templates/partials');

app.set('view engine', 'hbs');
app.set('views', views);
hbs.registerPartials(partials);
app.use(express.static(public))


// const location = process.argv[2];
// if (!location) return console.log('Specify a location!');
// else {
//     geocode(location, (error, {
//         name,
//         latitude,
//         longitude
//     } = {}) => {
//         if (error) return console.log(error);

//         weather(latitude, longitude, (error, {
//             current
//         }) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log(name + ': ' + current.weather_descriptions + '. It is currently ' + current.temperature + ' degrees out. There is a ' + current.precip + '% chance of rain!');
//             }
//         });
//     });
// }

app.listen(process.env.port, () => {
    console.log('Server is up on port ' + process.env.port + '!');
});