/** @jsx React.DOM */
var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var QuestList = React.createClass({

  displayName: 'QuestList',

  render: function() {
    return (

      <div id="module-questList">
        <Link to="quest" className="pure-button pure-button-primary">
          + Create a New Quest
        </Link>
      </div>

    );
  }

});

module.exports = QuestList;
