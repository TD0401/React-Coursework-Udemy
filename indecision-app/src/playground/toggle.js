const appRoot = document.getElementById("app");
let visible = false;


const onToggle = (e) => {
    visible = !visible;
    renderTemplate();
}

//JSX - Javascript XML -- this is not understandable by browser, so compile into plain java script, use babel - babeljs.io
// only one root element
// react events - synthetic events page by Facebook
const renderTemplate = () => {
    var template = (
        <div>
            <h1>Visiblity toggle</h1>
            <button onClick={onToggle}>{visible ? "Hide Details" : "Show Details"}</button>
            { visible && <p>"Here are some details you need to know!"</p>}
        </div>);

    //var template = React.createElement("p", null, "This is JSX from app.js");

    ReactDOM.render(template,appRoot);
}

renderTemplate();