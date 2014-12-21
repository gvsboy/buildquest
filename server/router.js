function Router(app, db) {
  this._app = app;
  this._db = db;
  this._setRoutes();
  this._setDefault();
}

Router.prototype = {

  _getEndpoints: function() {
    return [
      'quests',
      'areas'
    ];
  },

  _setRoutes: function() {

    var self = this;

    self._getEndpoints().each(function(endpoint) {

      self._app

        .get('/' + endpoint, function(req, res) {
          self._db.collection(endpoint).find().toArray(function(err, docs) {
            res.send(err || docs);
          });
        })

        .post('/' + endpoint, function(req, res) {
          self._db.collection(endpoint).save(req.body, function(err, doc) {

            // If doc is 1, that means this was an update.
            // Send a status code signaling the client to cache the posted data.
            if (doc === 1) {
              doc = {status: 'updated'};
            }
            res.send(err || doc);
          });
        });

    });

  },

  /**
   * Catch-all redirect to index
   */
  _setDefault: function() {
    this._app.get('*', function(req, res) {
      res.redirect('/');
    });
  }

};

module.exports = Router;
