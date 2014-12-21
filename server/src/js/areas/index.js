/** @jsx React.DOM */
var React = require('react'),
    Router = require('react-router'),
    Error = require('../util/error'),
    AreaList = require('./list'),
    Store = require('../mixins/store'),
    Link = Router.Link;

var AreaIndex = React.createClass({

  displayName: 'AreaIndex',

  mixins: [Store],

  componentDidMount: function() {
    this.getData('areas');
  },

  render: function() {
    return (

      <div id="module-areaIndex">
        <Link to="area" params={{id: this.props.params.id}} className="pure-button pure-button-primary">
          <i className="fa fa-plus-square"></i> Create a New Area
        </Link>
        {this.state.error ? <Error type='areaIndex'/> : <AreaList data={this.state.data}/>}
      </div>

    );
  }

});

module.exports = AreaIndex;
