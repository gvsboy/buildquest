var React = require('react'),
    Fiber = require('Fiber'),
    TitleView = require('./views/Title');

Game = Fiber.extend(function() {

  return {

    init: function(data) {
      this._data = data;
      this._container = document.body;
      React.render(
        <TitleView name={data.questName} onSubmit={this.start}/>,
        this._container
      );
    },

    start: function(playerName) {
      console.log('game begins! ', playerName);
    }

  }

});

module.exports = Game;
