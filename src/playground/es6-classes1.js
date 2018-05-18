class Person {
    constructor(name="Anonymous", age="30") {
        this.name = name,
        this.age =age
    }

    greetingsguys() {
        return `hello ${this.name} you are ${this.age}`
    }
}

class Student extends Person {
    constructor(name,age,major) {
        super(name,age);
        this.major = major;
    }
    getMajor () {
        if(!!this.major) {
            return true
        }
    }
    greetingsguys() {
        if(this.getMajor()) {
            return 'You have a major ' + super.greetingsguys()
        }
        else {
            return super.greetingsguys();
        }
       
    }
}

class Traveller extends Person {

    constructor (name, age, travellocation) {
        super(name,age);
        this.travellocation = travellocation;
    }
    getTravelLocation () {
        return this.travellocation;
    }
}

const me = new Person ("Andrew mead ", "45");
console.log(me.greetingsguys());
const nouser = new Person();
console.log(nouser.greetingsguys());

const mike = new Student("Mike Jackson","49","Computer Science");
console.log(mike.greetingsguys());
console.log(mike.getMajor());

// Student who doesnt have a major

const ramya = new Student("Ramya kondamkott","54");
console.log(ramya.greetingsguys());

//Traveller Profile

const sudheej = new Traveller("Sudheej Sudhakaran", "30","New York")
console.log(sudheej.getTravelLocation());