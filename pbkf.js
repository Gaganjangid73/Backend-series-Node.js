const { error, log } = require("node:console");
const crypto = require("node:crypto");

console.log("hello world");

const a = 1078698;
const b = 89202;

//  Synchronous pbkdf2 function (blocks main thread) — not recommended
const key1 = crypto.pbkdf2Sync("password", "salt", 50000, 50, "sha512");
console.log("First key is generated (sync)");

//  Asynchronous pbkdf2 function (non-blocking)
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  if (err) throw err;
  console.log("Secured key is generated (async):", key.toString("hex"));
});

//  Multiplication function
function multiplyfn(x, y) {
  return x * y;
}

const c = multiplyfn(a, b);
console.log( c);
