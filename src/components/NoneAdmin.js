const BASE_URL = 'https://api.spotify.com/v1/search?';
const FETCH_URL = BASE_URL + 'q=blazed&type=track&limit=1';
var accessToken = 'BQCK91FWJ5S10GP5OzbOCoXQflcZA7etccipu-r7-bTAT3r1Cbe2cEI2mi8WaWFQzVK8E_b5iK2d-DsI7d6GWs5mS2d3qQW40EHcQaU3ttD7UO-9GXnJeR3wa_Y5QZ4MaGAcoPi84BkVqzqAwWmAKwnnwcOdEL_qpFE';
var myHeaders = new Headers();

var myOptions = {
    method: 'GET',
    headers:  {
        'Authorization': 'Bearer ' + accessToken
    },
    mode: 'cors',
    cache: 'default'
};

fetch(FETCH_URL, myOptions )
    .then(response => response.json())
    .then(json => console.log(json));
