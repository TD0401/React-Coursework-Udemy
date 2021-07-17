import React from 'react';


//not changed to stateless functional component because state is maintained here
export default class AddOptions extends React.Component{
    state = {
        error: undefined
    }

    handleSubmit =(e) => {
        e.preventDefault();
        const optionText = e.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(optionText);
        console.log(status);
        e.target.elements.option.value = '';
        this.setState(()=>{
           return {error};
        });
    }

    render(){
        return  (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleSubmit}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className ="button">Add Options</button>
                </form>
            </div>
        );
    }
}