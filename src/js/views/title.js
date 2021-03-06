/** @jsx React.DOM */
var React = require('react');

TitleView = React.createClass({

  displayName: 'TitleView',

  getInitialState: function() {
    return {disabled: true};
  },

  handleSubmit: function(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state.name);
  },

  validate: function(evt) {
    var value = evt.target.value;
    this.setState({
      disabled: !value,
      name: value
    });
  },

  transitionOut: function(className, callback) {
    var node = this.getDOMNode();
    var animationEndTypes = ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'animationend'];
    _.each(animationEndTypes, function(type) {
      function transition() {
        node.removeEventListener(type, transition);
        callback();
      }
      node.addEventListener(type, transition);
    }, this);
  },

  render: function() {
    return (

      <div id='title-view'>
        <h1 className='animated zoomInDown'>{this.props.name}</h1>
        <form id='form-name' className='pure-form animated fadeIn' onSubmit={this.handleSubmit}>
          <label htmlFor='input-name'>What&apos;s your name?</label>
          <input id='input-name' type='text' maxLength='50' onChange={this.validate}/>
          <button disabled={this.state.disabled} className='pure-button fa fa-arrow-circle-right'>Let&apos;s Go!</button>
        </form>
      </div>

    );
  }

});

module.exports = TitleView;
