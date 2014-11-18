/** @jsx React.DOM */
var React = require('react'),
    _ = require('lodash'),
    IMAGE_BASE = '../data/images/{area}-large.jpg';

var AreasView = React.createClass({

  displayName: 'AreasView',

  handleClick: function(evt) {
    var area = _.last(evt.currentTarget.href.split('/'));
    evt.preventDefault();
    console.log(evt.currentTarget.href, area);
    console.log(evt);
    console.log(evt.currentTarget);
  },

  render: function() {

    var self = this,
        data = self.props.data;

    return (

      <div id='area-view'>
        <h1>{data.goal}!</h1>
        <h2>Where do you want to go?</h2>
        <ul>
          {_.map(data.areas, function(area) {

            var alias = area.alias,
                image = IMAGE_BASE.replace('{area}', alias);

            return <li key={alias} className='animated bounceIn'>
              <a href={alias} onClick={self.handleClick}>
                <span>{area.name}</span>
                <img src={image} alt={area.name}/>
              </a>
            </li>;
          })}
        </ul>
      </div>

    );
  }
});

module.exports = AreasView;
