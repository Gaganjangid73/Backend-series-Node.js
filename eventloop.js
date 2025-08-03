
const fs = require("fs")
const a = 1000;

setImmediate(()=>console.log("set Immediate"));

fs.readFile("./file.txt", "utf-8", ()=>{
    console.log("file reading CB");
});

setTimeout(()=> console.log("Timer expired"),0);

function PrintA(){
    console.log("a=",a);
}

PrintA();
console.log("last Line of the file.");
