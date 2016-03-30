function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstName);
};

var micky = new Person('Micky', 'Mouse');

micky.greet();