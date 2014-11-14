var React = require('react');

TitleView = React.createClass({

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

  render: function() {
    return (

      <div id='title-view'>
        <h1>{this.props.name}</h1>
        <form id='form-name' className='pure-form' onSubmit={this.handleSubmit}>
          <label htmlFor='input-name'>What&apos;s your name?</label>
          <input id='input-name' type='text' maxLength='50' onChange={this.validate}/>
          <button disabled={this.state.disabled} className='pure-button'>Let&apos;s Go!</button>
        </form>
      </div>

    );
  }

});

module.exports = TitleView;
