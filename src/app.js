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


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'AR'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'AR'
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please provide an address'
        });
    }

    geocode(req.query.address, (error, {location, latitude, longitude} = {}) => {
        if (error) return res.send({error});

        weather(latitude, longitude, (error, {current}) => {
            if (error) {
                return res.send({error});
            } else {
                console.log(location);
                res.send({
                    location,
                    description: current.weather_descriptions,
                    temperature: current.temperature,
                    precip: current.precip
                });
            }
        });
    });
});


app.get('*', (req, res) => {
    res.render('404', {
        errorMesg: 'Page not found!',
        name: 'AR'
    })
})


app.listen(process.env.port, () => {
    console.log('Server is up on port ' + process.env.port + '!');
});