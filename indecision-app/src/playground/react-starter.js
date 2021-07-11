

var app  = {
    title:"some title",
    subtitle:"this is subtitle",
    options:['one','two']

};

function getOptions(){
    if(app.options && app.options.length >0)
        return <p>here are some options</p>;
    else
        return <p> No options</p>;
}

//JSX - Javascript XML -- this is not understandable by browser, so compile into plain java script, use babel - babeljs.io
// only one root element
var template = (
    <div>
         <h1>{app.title}</h1>
         {app.subtitle && <p>{app.subtitle}</p>}
         {getOptions()}
         <ol>
            <li>Movies</li>
            <li>Shopping</li>
            <li>Sight Seeing</li>
         </ol>

    </div>);

//var template = React.createElement("p", null, "This is JSX from app.js");
var appRoot = document.getElementById("app");
ReactDOM.render(template,appRoot);

var userName = "Trina Dey";
var userAge = 32;
var userLoc = "New Delhi, India";


var template2 = (
    <div>
        <h1>{userName.toUpperCase() + '!'}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLoc} </p>
    </div>

);

var appRoot2 = document.getElementById("app2");
ReactDOM.render(template2,appRoot2);


var user= {
    name:"",
    age:32,
    location:null
};

function getLocation(location){
    if(location)
        return <p>Location: {location}</p>;
}

// ternary operationr
//function
//logical opreration true && string will return string
var template3 = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {user.age >=18 &&  <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>

);

var appRoot3 = document.getElementById("app3");
ReactDOM.render(template3,appRoot3);


let count =0;

const addone = ()=> {
    count++ ;
    reactAppRenderTemplate();
};

const minusone = ()=> {
    count--; 
    reactAppRenderTemplate();
};

const reset = ()=> {
    count =0;
    reactAppRenderTemplate();
};



//JSX has className instead of class attribute because in ES6 class is a reserved key word
const reactAppRenderTemplate = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addone}>+1</button>
            <button onClick={minusone}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(template,appRoot);
}

reactAppRenderTemplate();