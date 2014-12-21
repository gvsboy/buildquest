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
          <li><Link to="areas" params={{id: this.props.objectId}}>Areas</Link></li>
          <li><Link to="objects" params={{id:345}}>Items</Link></li>
          <li><Link to="objects" params={{id:345}}>Monsters</Link></li>
          <li><Link to="objects" params={{id:345}}>Conditions</Link></li>
          <li><Link to="objects" params={{id:345}}>Stories</Link></li>
        </ul>
      </div>

    );
  }
});

module.exports = ObjectsMenu;
