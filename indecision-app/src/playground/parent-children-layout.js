import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.content}
            <p>footer</p>
        </div>
    );
}

const Layout2 = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
}


const template = (
    <div>
        <h1>PageTitle</h1>
        <p>this is my page</p>
    </div>
);

//ReactDOM.render(<Layout content={template} />, document.getElementById('app'));
ReactDOM.render((<Layout2> 
                    <div>
                        <p>This is another subtitle format</p>
                    </div>
                </Layout2>), 
document.getElementById('app'));


//ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



