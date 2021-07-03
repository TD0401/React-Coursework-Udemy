//var allows to redefine variable

var nameVar = "Trina";
var nameVar ="Dey";

console.log("nameVar",nameVar);

//let based variables can be reassigned but not redefined
let nameLet="John";
nameLet ="Jane";

console.log("nameLet", nameLet);

//const variables can only be defined once and assigned once
const nameConst ="Doe";
console.log("nameConst",nameConst);

//All var, let, const are function scoped variables
// let, const are block scoped like for loops but not var


var fullName = "Trina Dey";
if(fullName){
    var firstName = fullName.split(" ")[0];
    let firstLet= fullName.split(" ")[0];
    console.log("firstName",firstName);
    console.log("firstLet",firstLet);
}

console.log("firstName",firstName);


function getName(){
    var nameVar2="Trina";
    console.log("nameVar2",nameVar2);
}

//this should give error
//console.log("firstLet",firstLet);

//this should give error
//console.log("nameVar2",nameVar2);