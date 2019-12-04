"use strict";

console.log('app.js is running');
var template = React.createElement(
  "p",
  null,
  "Did this change?"
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
