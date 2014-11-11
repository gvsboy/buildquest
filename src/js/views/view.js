var View = Fiber.extend(function() {

  return {

    init: function() {
      this.create();
    },

    attached: function() {
      return this.$el.parent().length;
    },

    render: function() {
      if (!this.attached) {
        $(body).append(this.$el);
      }
    },

    create: function() {}

  }

});

module.exports = View;
