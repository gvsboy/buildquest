var React = require('react'),
    Fiber = require('fiber'),
    Player = require('./Player'),
    TitleView = require('./views/Title'),
    AreasView = require('./views/Areas');

Game = Fiber.extend(function() {

  return {

    init: function(data) {
      this._data = data;
      this._container = document.body;
      React.render(
        <TitleView name={data.questName} onSubmit={this.start.bind(this)}/>,
        this._container
      );
    },

    start: function(playerName) {
      this.player = new Player(playerName);
      React.render(
        <AreasView data={this._data}/>,
        this._container
      );
    }

  }

});

module.exports = Game;
