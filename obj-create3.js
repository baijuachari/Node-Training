//using Object.create

var obj1 = Object.create({x:1, y:2});

console.log(obj1.x);
//---------------------------

var obj2 = Object.create(obj1);
console.log(obj2.x);

//------------------
console.log(obj2 instanceof obj1);