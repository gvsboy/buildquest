var Fiber = require('fiber'),

Player = Fiber.extend(function() {

  return {

    init: function(name) {
      this.name = name;
    }

  }

});

module.exports = Player;
