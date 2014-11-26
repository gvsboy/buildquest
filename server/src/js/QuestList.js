/** @jsx React.DOM */
var React = require('react');

var QuestList = React.createClass({

  displayName: 'QuestList',

  handleClick: function() {
    this.props.setModule('Quest');
  },

  render: function() {
    return (

      <div id="module-questList">
        <button className="pure-button pure-button-primary" onClick={this.handleClick}>
          + Create a New Quest
        </button>
      </div>

    );
  }

});

module.exports = QuestList;
