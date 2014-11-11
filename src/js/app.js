//var TitleView = require('./views/title');
//var view = new TitleView();

var React = require('react');

/*
var CommentBox = React.createClass({displayName: 'CommentBox',

  render: function() {
    return (
      React.createElement('div', {className: 'commentBox'},
        'Hello, world!'
      )
    );
  }

});

React.render(
  React.createElement(CommentBox, null),
  document.body
);
*/

var CommentBox = React.createClass({

  render: function() {
    return (
      <div className="commentBox">
        Hello, world!
      </div>
    );
  }

});

React.render(<CommentBox/>, document.body);
