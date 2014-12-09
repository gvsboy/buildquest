/** @jsx React.DOM */
var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var QuestItem = React.createClass({

  displayName: 'QuestItem',

  render: function() {

    var data = this.props.data;

    return (

      <li>
        <Link to="objects" params={{id: this.props.data._id}}>
          <h3>{data.name}</h3>
          <p>{data.goal}</p>
        </Link>
      </li>

    );
  }
});

module.exports = QuestItem;
