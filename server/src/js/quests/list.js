/** @jsx React.DOM */
var React = require('react'),
    QuestItem = require('./item'),
    _ = require('lodash');

var QuestList = React.createClass({

  displayName: 'QuestList',

  render: function() {
    return (

      <ul>
        {_.map(this.props.data, function(quest) {
          return <QuestItem key={quest._id} data={quest}/>;
        })}
      </ul>

    );
  }
});

module.exports = QuestList;
