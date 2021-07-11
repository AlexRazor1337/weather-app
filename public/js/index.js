const weather_form = document.querySelector('form');
const forecast = document.querySelector('#forecast');

weather_form.addEventListener('submit', (e) => {
    e.preventDefault();

    let search = document.querySelector('#location_input').value;
    const url = window.location.href.replaceAll('/?', '/') + 'weather?address=' + encodeURIComponent(search);
    console.log(url);
    forecast.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                forecast.innerHTML = data.error;
            } else {
                console.log(data);
                forecast.innerHTML = data.location + ': ' + data.description + '. It is currently ' + data.temperature + ' degrees out. There is a ' + data.precip + '% chance of rain!';
            }
        });
    });
});