/** @jsx React.DOM */
var React = require('react'),
    QuestList = require('./QuestList')

Builder = React.createClass({

  displayName: 'Builder',

  modules: {
    QuestList: <QuestList key="module-questList"/>,
    NewQuest: <div key="module-newQuest">YEAH!</div>
  },

  getInitialState: function() {
    return {
      module: 'QuestList'
    }
  },

  setModule: function(newModule) {
    this.setState({
      module: newModule
    });
  },

  render: function() {

    var module = this.modules[this.state.module];
    module.props.setModule = this.setModule;

    return (

      <div id="module-builder">
        <h1 className="animated bounceInDown">QuestBuilder</h1>
        {module}
      </div>

    );
  }
});

module.exports = Builder;
