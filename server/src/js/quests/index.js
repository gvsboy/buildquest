/** @jsx React.DOM */
var React = require('react'),
    Router = require('react-router'),
    Error = require('../util/error'),
    QuestList = require('./list'),
    Store = require('../mixins/store'),
    Link = Router.Link;

var QuestIndex = React.createClass({

  displayName: 'QuestIndex',

  mixins: [Store],

  componentDidMount: function() {
    this.getData('quests');
  },

  render: function() {
    return (

      <div id="module-questIndex">
        <Link to="quest" className="pure-button pure-button-primary">
          <i className="fa fa-plus-square"></i> Create a New Quest
        </Link>
        {this.state.error ? <Error type='questIndex'/> : <QuestList data={this.state.data}/>}
      </div>

    );
  }

});

module.exports = QuestIndex;
