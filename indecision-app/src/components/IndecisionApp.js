import React from 'react';
import AddOptions from './AddOptions'; // leave out .js webpack will look for this itself
import Options from './Options';
import OptionModal from './OptionModal';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component{
   /* constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state ={
            options : props.options
        }
        
    }*/
    
    state ={
        options : [],
        selectedOption: undefined
    }
    //component Lifecycle components
    componentDidMount(){
       const json = localStorage.getItem('options');
       if(json){
            const options = JSON.parse(json);
            if (options){
                this.setState(() => ({options}));
            }
       }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillMount(){
        console.log("componentWillMount");
    }
    
    handleDeleteOptions = () => {
       /* this.setState(() => {
            return {
                options:[]
            }
        });*/

        //alternate way is instead of returning use => () which means implicit return
        this.setState(() => ({options:[]}));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick= () =>{
        const randomnNum = Math.floor(Math.random() * this.state.options.length);
        const selected = this.state.options[randomnNum];
        this.setState(() => ({
            selectedOption: selected
          }));
    }

    handleAddOptions = (option) =>{
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

    handleClearSelectedOption = () =>{
        this.setState( () => ({selectedOption:undefined}));
    }

    render(){
       
        const subTitle="Confused what to do? Add some options and let us decide! ";
       
       return( 
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOptions
                        handleAddOptions={this.handleAddOptions}
                        />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption}  handleClear= {this.handleClearSelectedOption}/>
                
            </div>
       );
    }
}

IndecisionApp.defaultProps = {
    options : []
}