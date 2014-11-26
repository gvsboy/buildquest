/** @jsx React.DOM */
var React = require('react'),
    QuestList = require('./QuestList'),
    Quest = require('./Quest'),
    _ = require('lodash'),

Builder = React.createClass({

  displayName: 'Builder',

  modules: {
    QuestList:  <QuestList key="module-questList"/>,
    Quest:      <Quest key="module-quest"/>
  },

  getInitialState: function() {
    return {
      module: 'QuestList'
    }
  },

  componentWillMount: function() {
    _.forEach(this.modules, function(module) {
      module.props.setModule = this.setModule;
    }, this);
  },

  setModule: function(newModule) {
    this.setState({
      module: newModule
    });
  },

  render: function() {

    var module = this.modules[this.state.module];

    return (

      <div id="module-builder">
        <h1 className="animated bounceInDown">QuestBuilder</h1>
        {module}
      </div>

    );
  }
});

module.exports = Builder;
