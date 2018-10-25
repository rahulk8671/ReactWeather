var React = require('react');
var ErrorModal = require('ErrorModal');

var WeatherForm = React.createClass({
    // getInitialState: function () {
    //     return {
    //         isValid: false
    //     }
    // },
    onFormSubmit: function (e) {
        e.preventDefault();
        var location = this.refs.location.value;
        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }//else {
        //     this.setState({
        //         isValid: true
        //     })
        // }
    },
    render: function() {
        // var {isValid} = this.state;
        // var that = this;
        // function checkValid () {
        //     if (isValid) {
        //         return (
        //             <ErrorModal erro = 'type something'/>
        //         )
        //     }
        // }
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" placeholder="search"></input>
                    <button className="button expanded hollow">Get Weather</button>
                    {/* {checkValid()} */}
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;