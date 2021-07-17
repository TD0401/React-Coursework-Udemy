import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

//normalize browser base css to reset
import 'normalize-css/normalize.css'

//import './styles/styles.css'; // to load normal css files
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



