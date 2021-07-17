import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
   
   <Modal
             isOpen = {!!props.selectedOption}
             onRequestClose={props.handleClear}
             contentLabel ='Selected Option' //this is for accessibility feature
            closeTimeoutMS= '1000'
            className="modal"
             >
       
                <h3 className="modal__title">Selected Option</h3>
                {props.selectedOption && <p className="modal__body">{props.selectedOption} </p>} 
                <button className="button" onClick={props.handleClear}>Ok</button>
            </Modal>
    

);

export default OptionModal;