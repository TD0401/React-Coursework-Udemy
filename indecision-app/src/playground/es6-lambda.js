
function funcSquare(x){
    return x*x;
}

console.log(funcSquare(3));

const square = function(x) {
    return x*x;
}

console.log(square(8));


const squarelam = (x) => { return x * x;}

console.log(squarelam(9));


const squareimp = (x) =>  x * x;

console.log(squareimp(11));


const getFirstName = (fullName) => fullName.split(" ")[0];
console.log(getFirstName("trina dey"));