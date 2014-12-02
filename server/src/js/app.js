var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,

    Quest = require('./Quest'),
    QuestList = require('./QuestList');

var App = React.createClass({

  render: function() {
    return (
      <div id="application">
        <header>
          <h1 className="animated bounceInDown">
            <Link to="/">
              QuestBuilder
            </Link>
          </h1>
        </header>
        <RouteHandler/>
      </div>
    );
  }

});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="quest" handler={Quest}/>
    <DefaultRoute handler={QuestList}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});
