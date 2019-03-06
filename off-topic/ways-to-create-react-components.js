import React from 'react';

// ES5 Class
var HelloWorld = React.createClass({
  render: function () {
    return (
      <h1>Hello World</h1>
    );
  }
});

// ES5 Stateless
var HelloWorld = function(props) {
  return (
    <h1>Hello World</h1>
  );
};

// ES6 Stateless
const HelloWorld = (props) => {
  return (
    <h1>Hello World</h1>
  );
};
