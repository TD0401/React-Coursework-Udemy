//import './utils.js';
//sub is a default export

//yarn install validator
import validator from 'validator'

import sub,{square,add,mul} from './utils.js';

console.log("app.js running");

console.log(validator.isEmail('test'));

// this gives error unless we export from utils.js
console.log(square(4));
console.log(add(4 , 5));
console.log(mul(4 , 5));
console.log(sub(40 , 5));