var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,

    QuestEdit = require('./quests/edit'),
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
        <RouteHandler {...this.props}/>
      </div>
    );
  }

});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="quest" handler={QuestEdit}/>
    <Route name="objects" path="/objects/:id" handler={ObjectsIndex}>
      <DefaultRoute handler={QuestEdit}/>
    </Route>
    <DefaultRoute handler={QuestIndex}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  React.render(<Handler params={state.params}/>, document.body);
});
