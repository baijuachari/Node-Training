function Book(name, year) {
	this.name = name;
	this.year = year;
};

var myBook = new Book('Javascript', '2016');
console.log(myBook);
console.log(myBook instanceof Book);
console.log('--------------');

// using new is important
// https://css-tricks.com/understanding-javascript-constructors/
var hisBook = Book('Hadoop', '2001');
console.log(hisBook);
console.log(hisBook instanceof Book);
console.log(global.name);  //equivalent to windows in browser