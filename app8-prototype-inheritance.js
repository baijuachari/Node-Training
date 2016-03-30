var parent = {
	wealth: 'Parents Wealth',
	house: 'Parents House',
}

var child = {
	name: 'Childs Name'
}

child.prototype = parent;
console.log(child.prototype.wealth);