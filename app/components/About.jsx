var React = require('react');

var About = React.createClass({
    render: function() {
        return(
            <div>
                <h3 className="text-center page-title">About</h3>
                <p>This is a weather application build on React</p>
                <p>
                    Here are some of the tools I used:
                </p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io">React</a> - This was the JavaScript freamework used.
                    </li>
                </ul>
            </div> 
        );
    }
});

module.exports = About;