console.log("utils is running");


const square = (x) => x * x;

const add = (a,b) => a+b;

const sub = (a,b) => a-b;

const div = (a,b) => a/b;

// 2 types of exports
// default export 
//named exports

//default exports
export const mul= (a,b) => a *b ;

//named exports, we dont put data but references of things we want to export
export{ square , add, sub as default};


//can have only on default hence commented below. But below can also be used. 
//note that we cant use the  qualifier export default const div , so we define function separately then declare export default
//export default div;




