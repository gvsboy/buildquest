/** @jsx React.DOM */
var React = require('react'),
    QuestItem = require('./item');

var QuestList = React.createClass({

  displayName: 'QuestList',

  render: function() {
    return (

      <ul>
        {this.props.data.map(function(quest) {
          return <QuestItem key={quest._id} data={quest}/>;
        })}
      </ul>

    );
  }
});

module.exports = QuestList;
