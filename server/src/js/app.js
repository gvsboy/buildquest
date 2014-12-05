var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,

    QuestNew = require('./quests/new'),
    QuestIndex = require('./quests/index'),
    ObjectsIndex = require('./objects/index');

var App = React.createClass({

  render: function() {
    return (
      <div id="application">
        <header>
          <h1 className="animated bounceInDown">
            <Link to="/">
              <i className="fa fa-cubes"></i> QuestBuilder
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
    <Route name="quest" handler={QuestNew}/>
    <Route name="objects" handler={ObjectsIndex}>
      <DefaultRoute handler={QuestNew}/>
    </Route>
    <DefaultRoute handler={QuestIndex}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});
