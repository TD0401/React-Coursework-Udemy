"use strict";

var appRoot = document.getElementById("app");
var app = {
    title: "some title",
    subtitle: "this is subtitle",
    options: ['movies', 'shopping']

};

function getOptions() {
    if (app.options && app.options.length > 0) return React.createElement(
        "p",
        null,
        "here are ",
        app.options.length,
        " options"
    );else return React.createElement(
        "p",
        null,
        " No options"
    );
}

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

var removeall = function removeall(e) {
    app.options = [];
    renderTemplate();
};

var onMakeDecision = function onMakeDecision(e) {
    var randomnNum = Math.floor(Math.random() * app.options.length);
    var selected = app.options[randomnNum];
    alert(selected);
};

//JSX - Javascript XML -- this is not understandable by browser, so compile into plain java script, use babel - babeljs.io
// only one root element
// react events - synthetic events page by Facebook
var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        getOptions(),
        React.createElement(
            "ol",
            null,

            //keys are imporant in array in JSX to uniquely identify else it throws error
            app.options.map(function (opt) {
                return React.createElement(
                    "li",
                    { key: opt },
                    opt
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        ),
        React.createElement(
            "button",
            { onClick: removeall },
            "Remove All"
        ),
        React.createElement(
            "button",
            { onClick: onMakeDecision, disabled: app.options.length === 0 },
            "What should I do?"
        )
    );

    //var template = React.createElement("p", null, "This is JSX from app.js");

    ReactDOM.render(template, appRoot);
};

renderTemplate();
