/** @jsx React.DOM */
var React = require('react'),
    TextInput = require('../util/text-input'),
    Navigation = require('react-router').Navigation,
    Store = require('../mixins/store'),
    _ = require('lodash');

var Quest = React.createClass({

  mixins: [Navigation, Store],

  displayName: 'QuestEdit',

  componentWillMount: function() {
    var id = this.props.params.id;
    if (id) {
      this.getData('quests', id);
    }
  },

  handleSubmit: function(evt) {

    var target = evt.target,
        inputs = target.getElementsByTagName('input'),
        action = target.action.split('/').pop(),
        data = _.reduce(inputs, function(result, input) {
          result[input.name] = input.value;
          return result;
        }, {});

    evt.preventDefault();

    this.postData(action, data, _.bind(function(data) {
      this.transitionTo('objects', {id: data._id});
    }, this));
  },

  render: function() {

    // DB record id.
    var id = this.props.params.id,
        data = this.state.data;

    return (

      <div id="module-quest">
        <form className="pure-form pure-form-aligned" action="quests" onSubmit={this.handleSubmit}>
          <fieldset>

            <legend>Create a New Quest</legend>
            <TextInput dataType="name" data={data.name} placeholder="Awesome Quest 2"/>
            <TextInput dataType="goal" data={data.goal} placeholder="Find all the gummy bears"/>

            <div className="pure-control-group">
              <button type="submit" className="pure-button pure-button-primary">Continue</button>
            </div>

            {id ? <input id="_id" name="_id" type="hidden" value={id}/> : ''}

          </fieldset>
        </form>
      </div>

    );
  }

});

module.exports = Quest;
