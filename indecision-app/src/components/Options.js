import React from 'react';
import Option from './Option';

//converted class based components to stateless components
const Options =(props) =>{
    return (
        <div>
            <p>Here are your options  <button onClick={props.handleDeleteOptions}>Remove all</button></p>
            {
                props.options.map((option) => (
                  <Option
                    key={option}
                    optionText={option}
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