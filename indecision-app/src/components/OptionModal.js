import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
   
   <Modal
             isOpen = {!!props.selectedOption}
             onRequestClose={props.handleClear}
             contentLable ='Selected Option' //this is for accessibility feature
            >
       
                <h3>Selected Option: {props.selectedOption} </h3>
                <button onClick={props.handleClear}>Ok</button>
            </Modal>
    

);

export default OptionModal;