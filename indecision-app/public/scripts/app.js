"use strict";

//JSX - Javascript XML -- this is not understandable by browser, so compile into plain java script, use babel - babeljs.io
var template = React.createElement(
  "p",
  null,
  "This is JSX from app.js and now changing"
);

//var template = React.createElement("p", null, "This is JSX from app.js");
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
