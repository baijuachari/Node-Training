//function statement
function greet() {
	console.log('hello world');
}

//functions are first class
function logGreeting(fn) {
	fn();
}

logGreeting(greet);