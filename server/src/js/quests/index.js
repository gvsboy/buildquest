/** @jsx React.DOM */
var React = require('react'),
    Router = require('react-router'),
    Error = require('../util/Error'),
    QuestList = require('./list'),
    Link = Router.Link;

var QuestIndex = React.createClass({

  displayName: 'QuestIndex',

  getInitialState: function() {
    return {
      data: [],
      error: false
    };
  },

  componentDidMount: function() {
    var self = this,
        request = new XMLHttpRequest();
    request.open('GET', '/quests', true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        self.setState({
          data: JSON.parse(request.responseText)
        });
      } else {
        self.setState({
          error: true
        });
      }
    };

    request.send();
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
