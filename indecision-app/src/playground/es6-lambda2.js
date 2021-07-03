//arguments objects are not bound with the lambda functions
const add = function(a,b) {
    console.log(arguments);
    return a + b;

}
console.log(add(55,2));

console.log(add(55,2,'trina','dey'));

//this gives error arguments is not defined
const add2 = (a,b)=> {
    //console.log(arguments);
    return a + b;
}

console.log(add(55,2,'trina','dey'));



//this keyword -- no longer bound with the lambda functions

const user = { 
    name: "Trina Dey",
    cities:["New Delhi","Melbourne"],
    printPlacesLived: function(){
        const that = this;
        this.cities.forEach(function(city){
            //since foreach has an anonymous function, this.name is undefined throws an error
            //console.log(this.name + ' has lived in ' + city);
            // alternate is to define a const that and use it, below line would work
            console.log(that.name + ' has lived in ' + city);
        });
    },

    printPlacesLived2: function(){
        const that = this;
        this.cities.forEach((city) => {
            console.log(that.name + ' has lived in ' + city);
        });
    },
    printPlacesLived3(){
        const that = this;
        this.cities.forEach((city) => {
            console.log(that.name + ' has lived in ' + city);
        });
    },

    printPlacesLived4(){
        return this.cities.map((city) => this.name + " lived in " + city);
    }
}

user.printPlacesLived();
user.printPlacesLived2();
user.printPlacesLived3();
console.log(user.printPlacesLived4());


//challange
const multiplier = {
    nums :[2,6,7,19,17],
    multiply(multiplier) {
        this.nums.forEach((num) => console.log(num * multiplier));
    },
    multiplyBy(multiplier){
        return this.nums.map((num)=> num * multiplier);
    }
}

multiplier.multiply(2);
console.log(multiplier.multiplyBy(10));