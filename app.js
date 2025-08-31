require("./xyz");  // this is how we imporrt other module in other file.


const util = require("node:util");
const {multiply,calculate} = require('./Calculate')
const data = require('./data.json');

console.log(data);

var a = 10;
var b = 29;

multiply(a,b);
calculate(a,b);

var name ="Namaste NodeJs";



//here i finsihed node.js and move forward to the  express js 
