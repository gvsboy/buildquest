/** @jsx React.DOM */
var React = require('react'),
    _ = require('lodash');

var Quest = React.createClass({

  displayName: 'QuestNew',

  handleSubmit: function(evt) {

    var target = evt.target,
        inputs = target.getElementsByTagName('input'),
        data = _.reduce(inputs, function(result, input) {
          result[input.name] = input.value;
          return result;
        }, {});

    evt.preventDefault();
    this.post(target.action, data);
  },

  post: function(url, data, success, error) {

    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('content-type', 'application/json');

    request.onload = function() {
      if (request.status >= 200 && request.status < 400){
        // Success!
        //data = JSON.parse(request.responseText);
        console.log(request.responseText);
      } else {
        // We reached our target server, but it returned an error
        console.log('oh man server error!');
      }
    };

    request.send(JSON.stringify(data));
  },

  render: function() {
    return (

      <div id="module-quest">
        <form className="pure-form pure-form-aligned" action="/quests" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Create a New Quest</legend>

            <div className="pure-control-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Awesome Quest 2" required/>
            </div>

            <div className="pure-control-group">
              <label htmlFor="goal">Goal</label>
              <input id="goal" name="goal" type="text" placeholder="Find all the gummy bears" required/>
            </div>

            <div className="pure-control-group">
              <button type="submit" className="pure-button pure-button-primary">Continue</button>
            </div>

          </fieldset>
        </form>
      </div>

    );
  }

});

module.exports = Quest;
