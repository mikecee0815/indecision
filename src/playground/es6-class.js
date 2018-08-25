
class Person {
	constructor(name = 'Anonymous',age = 0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		return `Hello I	am ${this.name}`;
	}
}

const me = new Person('mike',47);
console.log(me.getGreeting());


const other  = new Person();
console.log(other.getGreeting());