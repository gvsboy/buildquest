/** @jsx React.DOM */
var React = require('react');

var TextInput = React.createClass({

  displayName: 'TextInput',

  capitalize: function(string) {
    return string[0].toUpperCase() + string.slice(1);
  },

  render: function() {

    var props = this.props,
        dataType = props.dataType,
        placeholder = props.placeholder,
        data = props.data;

    return (

      <div className="pure-control-group">
        <label htmlFor={dataType}>{this.capitalize(dataType)}</label>
        <input
          id={dataType}
          name={dataType}
          type="text"
          placeholder={placeholder}
          defaultValue={data ? data : ''}
        required/>
      </div>

    );
  }
});

module.exports = TextInput;
