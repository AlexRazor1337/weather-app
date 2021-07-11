const request = require('postman-request');

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?limit=1&access_token=' + process.env.geo_api_key;
    request({url, "json": true}, (error, _, {features}) => {
        if (error) {
            callback('Unable to connect to geo service!', undefined);
        } else if (features.length == 0) {
            callback('Location not found', undefined);
        } else {
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            });
        }
    });
}

module.exports = geocode;