import React from 'react';
import Option from './Option';

//converted class based components to stateless components
const Options =(props) =>{
    return (
        <div>
        <div className="widget-header"> 
            <h3 className="widget-header__title">Your Options  </h3>
            <button 
                className="button button--link" 
                onClick={props.handleDeleteOptions}>
                Remove all
            </button>
           
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
            {
                props.options.map((option, index) => (
                  <Option
                    key={option}
                    optionText={option}
                    count={index +1}
                    handleDeleteOption={props.handleDeleteOption}
                  />
                ))
            }
        </div>
    );
}

export default Options;

/*class Options extends React.Component{
    render(){
        // can use bind function as well but expensive
        //<p>Here are your options  <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button></p>
        return (
            <div>
                <p>Here are your options  <button onClick={this.props.handleDeleteOptions}>Remove all</button></p>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>) 
                }
            </div>
        );
    }
}*/