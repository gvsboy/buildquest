/**
 * An interface for storing and retrieving data.
 * @type {Object}
 */

// The namespace where the data object is located.
var NAMESPACE = '__store',

    // Context where the data is stored.
    CONTEXT = window,

    GET = 'get',
    POST = 'post',

    // Lo-Dash goodness.
    _ = require('lodash');

// Mixin
var Store = {

  getInitialState: function() {
    return {
      data: [],
      error: false
    };
  },

  /**
   * Initialize the data store if
   * @return {[type]} [description]
   */
  componentWillMount: function() {
    if (!CONTEXT[NAMESPACE]) {
      CONTEXT[NAMESPACE] = {};
    }
  },

  /**
   * Gets data by collection name and optional object id (if omitted,
   * all collection data is returned). If the data is not available
   * locally, an attempt will be made to fetch it from the server and
   * cache it locally. The state is updated accordingly.
   * @param  {String} name The collection name to get data from. 
   * @param  {String} [id] A specific object to get by id.
   */
  getData: function(type, id) {

    // Get the collection object.
    var collection = CONTEXT[NAMESPACE][type];

    // If the collection is already cached client side, try to find
    // the requested object.
    if (collection) {

      // If an id was passed, attempt to locate the object by id.
      if (id && collection[id]) {
        this._setData(collection[id]);
      }

      // Otherwise, get all the objects.
      else {
        this._setData(collection);
      }
    }

    // Otherwise, fetch it from the server.
    else {
      this._get(type, id);
    }
  },

  postData: function(type, data, callback) {
    this._post(type, data, callback);
  },

  _get: function(endpoint, id) {

    var request = new XMLHttpRequest();
    request.open(GET, endpoint, true);

    request.onload = _.bind(function() {
      var data;
      if (request.status >= 200 && request.status < 400) {
        data = JSON.parse(request.responseText);
        this._cache(endpoint, data);
        this._setData(data);
      } else {
        this._setError();
      }
    }, this);

    request.send();
  },

  _post: function(endpoint, data, callback) {

    var request = new XMLHttpRequest();
    request.open(POST, endpoint, true);
    request.setRequestHeader('content-type', 'application/json');

    request.onload = _.bind(function() {
      var data;
      if (request.status >= 200 && request.status < 400){
        data = JSON.parse(request.responseText);
        this._cache(endpoint, data);
        if (_.isFunction(callback)) {
          callback(data);
        }
      } else {
        this._setError();
      }
    }, this);

    request.send(JSON.stringify(data));
  },

  _cache: function(type, data) {

    var root = CONTEXT[NAMESPACE],
        collection = root[type] = root[type] || {};

    if (_.isArray(data)) {
      _.forEach(data, function(item) {
        collection[item._id] = item;
      });
    }

    else {
      collection[data._id] = data;
    }
  },

  _setData: function(data) {
    this.setState({
      data: data
    });
  },

  _setError: function() {
    this.setState({
      error: true
    });
  }

};

module.exports = Store;
