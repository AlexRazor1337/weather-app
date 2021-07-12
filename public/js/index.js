const weather_form = document.querySelector('form');
const forecast = document.querySelector('#forecast');

const callback = (data) => {
    forecast.innerHTML = data.location + ': ' + data.description + '. It is currently ' + data.temperature + ' degrees out. There is a ' + data.precip + '% chance of rain!';
}

weather_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const search = document.querySelector('#location_input').value.toLowerCase();
    forecast.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'

    const cached_data = Cookies.get(search);
    if (cached_data) return callback(JSON.parse(cached_data));

    const url = '/weather?address=' + encodeURIComponent(search);
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                forecast.innerHTML = data.error;
            } else {
                Cookies.set(search, data, {expires: 1/96, sameSite: 'Lax'}); // 15 minute cache to save some API calls
                callback(data);
            }
        });
    });
});