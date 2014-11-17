/** @jsx React.DOM */
var React = require('react'),
    _ = require('lodash');

var AreasView = React.createClass({

  displayName: 'AreasView',

  render: function() {

    return (

      <div id='area-view'>
        <ul>
          {_.each(this.props.data, function(area) {
            return <li key={area.alias}>woo</li>;
          })};
        </ul>
      </div>

    );
  }
});

module.exports = AreasView;
