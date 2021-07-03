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

const appRoot =  document.getElementById("app");

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