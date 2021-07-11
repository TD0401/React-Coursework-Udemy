const appRoot = document.getElementById("app");
var app  = {
    title:"some title",
    subtitle:"this is subtitle",
    options:['movies','shopping']

};

function getOptions(){
    if(app.options && app.options.length >0)
        return <p>here are {app.options.length} options</p>;
    else
        return <p> No options</p>;
}

const onFormSubmit = (e) => {
    e.preventDefault();
   const option = e.target.elements.option.value;
   if (option){
       app.options.push(option);
       e.target.elements.option.value = '';
       renderTemplate();
   }
}

const removeall = (e) => {
    app.options = [];
    renderTemplate();
}

const onMakeDecision = (e) => {
    const randomnNum = Math.floor(Math.random() * app.options.length);
    const selected = app.options[randomnNum];
    alert(selected);
}

//JSX - Javascript XML -- this is not understandable by browser, so compile into plain java script, use babel - babeljs.io
// only one root element
// react events - synthetic events page by Facebook
const renderTemplate = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {getOptions()}
            <ol>
            {
                //keys are imporant in array in JSX to uniquely identify else it throws error
                app.options.map((opt) => {
                    return  <li key={opt}>{opt}</li>
                })
            } 
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
                
            </form>
            <button onClick={removeall}>Remove All</button>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
        </div>);

    //var template = React.createElement("p", null, "This is JSX from app.js");

    ReactDOM.render(template,appRoot);
}

renderTemplate();