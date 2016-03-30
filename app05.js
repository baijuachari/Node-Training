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

//still firstclass
logGreeting(greetMe); 

//use a function expression oin the fly
logGreeting(function() {
	console.log('Hello world');
});