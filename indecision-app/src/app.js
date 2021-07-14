class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state ={
            options : props.options
        }
        
    }
    
    handleDeleteOptions(){
       /* this.setState(() => {
            return {
                options:[]
            }
        });*/

        //alternate way is instead of returning use => () which means implicit return
        this.setState(() => ({options:[]}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick(){
        const randomnNum = Math.floor(Math.random() * this.state.options.length);
        const selected = this.state.options[randomnNum];
        console.log(selected);
    }

    handleAddOptions(option){
        if(!option){
            return 'Enter valid values to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This item is already present';
        }

        /*this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });   */
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }

    render(){
       
        const subTitle="This is a subtitle ";
       
       return( 
            <div>
            <Header subTitle={subTitle} />
            <Action
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}
            />
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions
              handleAddOptions={this.handleAddOptions}
            />
            </div>
       );
    }
}

IndecisionApp.defaultProps = {
    options : []
}

//converted class based component to stateless functional compnents
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subTitle}</p>
        </div>
    );
}

Header.defaultProps ={
    title: "Indecision App"
}

/*class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subTitle}</p>
            </div>
        );
    }
}*/

//converted class based components to stateless components
const Action =(props) =>{
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    );
}

/*class Action extends React.Component{
    render(){
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
            </div>
        );
    }
}*/

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

//converted class based components to stateless components
const Option = (props) => {
    return (
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
}

/*class Option extends React.Component{
    render(){
        return <p>{this.props.optionText}</p>;
    }
}*/


//not changed to stateless functional component because state is maintained here
class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleSubmit(e){
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
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


//Stateless Functional Component
//note this.props.name wont work because this is functional and not class based
//advantage - faster because no class, to be used when no need to manage state
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Age: </p>
        </div>
    );
}
//ReactDOM.render(<User name="Trina" />, document.getElementById('app'));
