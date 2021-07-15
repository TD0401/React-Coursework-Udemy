import React from 'react';

//converted class based components to stateless components
const Option = (props) => (
    <div>
        {props.optionText}
        <button
            onClick={(e) => {
            props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>
);


export default Option;

/*class Option extends React.Component{
    render(){
        return <p>{this.props.optionText}</p>;
    }
}*/
