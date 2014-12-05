/** @jsx React.DOM */
var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var ObjectsMenu = React.createClass({

  displayName: 'ObjectsMenu',

  render: function() {
    return (

      <div id="objects-menu" className="pure-menu pure-menu-open">
        <span className="pure-menu-heading">Quest Objects</span>
        <ul>
          <li><Link to="objects">Areas</Link></li>
          <li><Link to="objects">Items</Link></li>
          <li><Link to="objects">Monsters</Link></li>
          <li><Link to="objects">Conditions</Link></li>
          <li><Link to="objects">Stories</Link></li>
        </ul>
      </div>

    );
  }
});

module.exports = ObjectsMenu;
