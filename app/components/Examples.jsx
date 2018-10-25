var React = require('react');
var {Link} = require('react-router');
 
var Examples = React.createClass({
    render: function() {
        return(
            <div>
            <h3 className="text-center page-title">Examples</h3>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Italy'>Italy</Link>
                </li>
                <li>
                    <Link to='/?location=Brazil'>Brazil</Link>
                </li>
            </ol>
            </div>

        );
    }
});

module.exports = Examples;