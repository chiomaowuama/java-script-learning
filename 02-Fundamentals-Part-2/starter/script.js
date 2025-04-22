"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicence = true;
// }
// if (hasDriversLicence) console.log("knows how to drive");

// const interface = "audio";
// const private = "54";

function logger() {
  console.log("my name is jonas");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges}oranges.`;
  return juice;
}
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
