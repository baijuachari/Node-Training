function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

var micky = new Person('Micky', 'Mouse');

console.log(micky);
console.log(micky.firstName);