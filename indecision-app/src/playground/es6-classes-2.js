class OldSyntax {
    constructor(){
        this.name = 'Trina';
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting(){
        return `Hi, my name is ${this.name}`;
    }
}

const osVar = new OldSyntax();
console.log(osVar);
console.log(osVar.getGreeting());


class NewSyntax {
    //no constructor with new es 6 plugin transformer
    name="Malini";

    //no binding required
    getGreeting = () => {
        return `Hi, my name is ${this.name}`;
    }
}

const nsVar = new NewSyntax();
console.log(nsVar);
const newGreet = nsVar.getGreeting;
console.log(newGreet);