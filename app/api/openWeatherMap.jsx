var axios = require('axios');

//const OPEN_WEATHER_MAP_URL = 'https://samples.openweathermap.org/data/2.5/weather?appid=ae8798803e6b1b22c6c3f9d99495881c&units=imperial';

var OPEN_WEATHER_MAP_URL = 'https://samples.openweathermap.org/data/2.5/weather?&appid=03b53d2872aa103c9cfebe1bf788cf63'
module.exports = {
    getTemp: function (location) {
        var  encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        //debugger;
        return axios.get(requestURL).then(function (res) {
            //debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
                //console.log(res);
            }            
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}