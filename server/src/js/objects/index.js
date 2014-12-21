/** @jsx React.DOM */
var React = require('react'),
    Menu = require('./menu'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var ObjectsIndex = React.createClass({

  displayName: 'ObjectsIndex',

  render: function() {
    return (

      <div>
        <h2>Quest Editor</h2>
        <Menu objectId={this.props.params.id}/>
        <RouteHandler {...this.props}/>
      </div>

    );
  }

});

module.exports = ObjectsIndex;
