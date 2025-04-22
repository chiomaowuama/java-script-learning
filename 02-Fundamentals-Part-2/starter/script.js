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
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangejuice = fruitProcessor(2, 4);
console.log(appleOrangejuice);

function calcage1(birthyear) {
  return 2037 - birthyear;
}

const age = calcage1(1998);
console.log(age);

const calAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = calAge2(1998);
console.log(age2);
