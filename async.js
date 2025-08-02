const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 56;
var b = 89;

// fs.readFileSync("./file.txt", "utf-8"); // it block the main threat by doing this  for 100 ms or 10 ms or depending on the file size. 
// console.log(" ");


https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched data succesfully");
});

setTimeout(()=>{
    console.log("Setimeout called after 5 seconds");
    
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data)=>{
   console.log("File Data :",data);
   
});

function multiplyfn(x,y){
    const result = a*b;
   return result;
}

var c = multiplyfn(a,b);

console.log("multiplication result is :", c);
