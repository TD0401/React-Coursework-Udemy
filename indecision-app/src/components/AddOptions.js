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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="option" />
                    <button>Add Options</button>
                </form>
            </div>
        );
    }
}