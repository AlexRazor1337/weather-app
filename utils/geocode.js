const request = require('postman-request');

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?limit=1&access_token=' + process.env.geo_api_key;
    request({"url": url, "json": true}, (error, _, body) => {
        if (error) {
            callback('Unable to connect to geo service!', undefined);
        } else if (body.features.length == 0) {
            callback('Location not found', undefined);
        } else {
            callback(undefined, {
                center: body.features[0].center,
                name: body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;