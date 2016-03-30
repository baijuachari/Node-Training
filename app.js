//blocking io example
var fs = require("fs");
// var buf1 = fs.readFileSync("sample1.txt", "utf8");
// console.log('contentof file1:' + buf1);
// var buf2 = fs.readFileSync("sample2.txt", "utf8");
// console.log('contentof file2:' + buf2);
// console.log('---I am done with reading all files---');

//non-blocking io example

fs.readFile('sample1.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
var buf2 =  fs.readFile('sample2.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
console.log('---I am done with reading all files---');