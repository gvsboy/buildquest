/** @jsx React.DOM */
var React = require('react');

var SubmitButton = React.createClass({

  displayName: 'SubmitButton',

  render: function () {
    return (

      <div className="pure-control-group">
        <button type="submit" className="pure-button pure-button-primary">{this.props.objectId ? "Edit" : "Create"}</button>
      </div>

    );
  }
});

module.exports = SubmitButton;
