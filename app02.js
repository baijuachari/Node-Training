//function statement
function greet() {
	console.log('hello world');
}
//function invocation
greet();

//functions are first class
function logGreeting(fn) {
	fn();
}

//function expression
var greetMe = function() {
	console.log('hi Baiju');
}
