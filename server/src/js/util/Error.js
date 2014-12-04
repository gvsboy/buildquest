/** @jsx React.DOM */
var React = require('react');

var Error = React.createClass({

  displayName: 'Error',

  messages: {
    questIndex: 'Could not fetch quest list from the server!'
  },

  getMessage: function() {
    return this.messages[this.props.type];
  },

  render: function() {
    return (

      <p className="error animated shake">
        <i className="fa fa-warning"></i> {this.getMessage()}
      </p>

    );
  }
});

module.exports = Error;
