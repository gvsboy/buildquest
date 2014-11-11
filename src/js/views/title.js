var View = require('./view');

var TitleView = View.extend(function(base) {

  return {

    init: function() {
      base.init.call(this);
    },

    create: function() {
      console.log('creating this!');
    }

  }

});

module.exports = TitleView;
