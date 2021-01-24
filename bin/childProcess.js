"use strict";

console.log(process.argv)

setTimeout(() => {
  process.send("13241234");
}, 3000);
