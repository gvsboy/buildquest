/** @jsx React.DOM */
var React = require('react'),
    //QuestItem = require('./item'),
    _ = require('lodash');

var AreaList = React.createClass({

  displayName: 'AreaList',

  render: function() {
    return (

      <ul>
        {_.map(this.props.data, function(quest) {
          <div>WOO</div>
        })}
      </ul>

    );
  }
});

module.exports = AreaList;
