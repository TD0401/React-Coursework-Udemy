class Person{
    // set default in param
    constructor(name, location = 'unknown', age=0){
        this.name = name;
        this.location = location || 'unknown'; // set a default if null using ||
    }

    getGreetings(){
        return `Hi, I am  ${this.name} ! I am from ${this.location}`;
    }
}

class Student extends Person{
    constructor(name, location, age, major){
        super(name, location,age);
        this.major = major || 'No';
    }

    hasMajor(){
        return !!this.major;
    }

    getGreetings(){
       return ` ${super.getGreetings()}. I have ${this.major} major`;
        
    }

}

const me = new Student("Trina Dey", "New Delhi" , 32, "Data Science");
console.log(me.getGreetings());

const bff = new Person("Malini Das");
console.log(bff.getGreetings());
