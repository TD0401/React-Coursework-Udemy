"use strict";

var count = 0;

var addone = function addone() {
    count++;
    reactAppRenderTemplate();
};

var minusone = function minusone() {
    count--;
    reactAppRenderTemplate();
};

var reset = function reset() {
    count = 0;
    reactAppRenderTemplate();
};

var appRoot = document.getElementById("app");

//JSX has className instead of class attribute because in ES6 class is a reserved key word
var reactAppRenderTemplate = function reactAppRenderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addone },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusone },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );

    ReactDOM.render(template, appRoot);
};

reactAppRenderTemplate();
