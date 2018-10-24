var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        })
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false,
            })
        }, function (error) {
            that.setState({
                isLoading: false,
                errorMessage: error.message
            });
        });
    },
    render: function() {
        var {isLoading, temp, location, errorMessage} = this.state;
        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Loading...</h3>
            }else if(temp && location) {
               return <WeatherMessage temp={temp} location={location}></WeatherMessage>
            }
        }
        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message = {errorMessage}/>
                )
            }
        }

        return(
            <div>
                <h3 className="text-center">Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {renderMessage()}
                {renderError()}
            </div>
            
        );
    }
});

module.exports = Weather;