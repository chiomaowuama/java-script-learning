"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicence = true;
// }
// if (hasDriversLicence) console.log("knows how to drive");

// const interface = "audio";
// const private = "54";

// function logger() {
//   console.log("my name is jonas");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);

// const appleOrangejuice = fruitProcessor(2, 4);
// console.log(appleOrangejuice);

// function calcage1(birthyear) {
//   return 2037 - birthyear;
// }

// const age = calcage1(1998);
// console.log(age);

// const calAge2 = function (birthyear) {
//   return 2037 - birthyear;
// };
// const age2 = calAge2(1998);
// console.log(age2);
// // arrow function

// const calcage3 = (birthyear) => 2037 - birthyear;

// const yearsuntileRetirement = (birthyear, firstname) => {
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   return `${firstname} retires in ${retirement}`;
// };
// console.log(yearsuntileRetirement(1991, "jonas"));

//functions calling other functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }
// const applejuice = fruitProcessor(6, 8);
// console.log(applejuice);

// code challange
// const calcAverage = (score1, score2, score3) => {
//   const average = (score1 + score2 + score3) / 3;
//   return average;
// };
// const avgdolPhins = calcAverage(85, 54, 41);
// const avgkolas = calcAverage(23, 34, 27);
// console.log(avgdolPhins, avgkolas);
// function checkWinner(avgdolPhins, avgkolas) {
//   if (avgdolPhins >= avgkolas * 2) {
//     console.log(`Dolphins is winner(${avgdolPhins} vs ${avgkolas})`);
//   } else if (avgkolas >= avgdolPhins * 2) {
//     console.log(`koalas is winner (${avgkolas} vs ${avgdolPhins})`);
//   } else {
//     console.log("no winner");
//   }
// }
// checkWinner(avgdolPhins, avgkolas);

// function checkwinnere
// const avgdolPhins = calcAverage(44, 23, 71);
// const avgdolPhins2 = calcAverage(85, 54, 41);
// console.log(avgdolPhins);

// const avgkolas = calcAverage(65, 54, 49);
// const avgkolas2 = calcAverage(23, 34, 27);
// console.log(avgkolas);

// array
// const friends = ["micheal", "chioma", "chisom"];
// console.log(friends.length);
// friends[2] = "jay";
// console.log(friends);

// const chioma = ["chioma", "adefolurin", 2037 - 1998, "student", friends];
// console.log(chioma);

// code exercise

// const calcage1 = function (birthyear) {
//   return 2037 - birthyear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcage1(years));

// const age1 = calcage1(years[0]);
// const age2 = calcage1(years[1]);
// const age3 = calcage1(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcage1(years[0]),
//   calcage1(years[1]),
//   calcage1(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["micheal", "chioma", "chisom"];

// console.log(friends);
// // console.log(friends.length);
// // add element
// friends.push("jay");
// console.log(friends);

// friends.unshift("jerry");
// console.log(friends);
// // remove element
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("chisom"));
// console.log(friends.includes("chioma"));

// code challange
// const bill = 430;
// const smallTip = (15 / 100) * bill;
// const bigTip = (20 / 100) * bill;
// const tips = bill >= 50 && bill <= 300 ? smallTip : bigTip;
// console.log(
//   `The bill is ${bill}, The tip is ${tips}, Total value is ${bill + tips}`
// );

// function calcTip(bill) {
//   const smallTip = (15 / 100) * bill;
//   const bigTip = (20 / 100) * bill;
//   const eachTips = bill >= 50 && bill <= 300 ? smallTip : bigTip;
//   return eachTips;
// }
// calcTip(100);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [
//   calcTip(bills[0]) + bills[0],
//   calcTip(bills[1]) + bills[1],
//   calcTip(bills[2]) + bills[2],
// ];
// console.log(total);

// // objects
// // this is an array
// const jonasArray = [
//   "jonas",
//   "Schemed",
//   2037 - 1991,
//   "teacher",
//   ["micheal", "peter", "steven,"],
// ];
// objects
// const jonas = {
//   firstName: "jonas",
//   lastName: "Schemed",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["micheal", "peter", "steven,"],
// };

// const jonas = {
//   firstName: "jonas",
//   lastName: "Schemed",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["micheal", "peter", "steven,"],
// };
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);
// console.log(jonas.lastName);
// console.log(jonas["lastName"]);
// // challange

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends,and his best, is called  ${jonas.friends[0]}`
// );

// has drivers method
// const jonas2 = {
//   firstName: "jonas",
//   lastName: "Schemed",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["micheal", "peter", "steven"],
//   hasDriversLicence: true,
//   calAage: function () {
//     return 2037 - this.birthYear;
//   },
// };

// console.log(jonas2.calAage());
// console.log(jonas["calAage"](1991));
// const jonas3 = {
//   firstName: "jonas",
//   lastName: "Schemed",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["micheal", "peter", "steven"],
//   hasDriversLicence: true,
//   drivingLicence: function () {
//     this.age = 2037 - this.birthYear;
//     this.licenceStatus =
//       this.hasDriversLicence == true ? `has a` : `does not have a`;
//     const licence = `${this.firstName} is a ${this.age} years old ${this.job}, he ${this.licenceStatus} drivers licence`;
//     return licence;
//   },
// };
// console.log(jonas3.drivingLicence());

// code challange
// const marksObject = {
//   firstName: "Mark",
//   lastName: "Millar",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.hisBmi = this.mass / (this.height * this.height);
//     console.log(this.hisBmi);
//   },
// };

// marksObject.calcBMI();
// console.log(marksObject);
// // john;
// const JohnObject = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.hisBmi = this.mass / (this.height * this.height);
//     console.log(this.hisBmi);
//   },
// };
// JohnObject.calcBMI();
// console.log(JohnObject);
// // question3
// const namekey = "Name";
// const higherBmi =
//   marksObject.hisBmi >= JohnObject.hisBmi
//     ? ` ${marksObject["first" + namekey]} ${
//         marksObject["last" + namekey]
//       }'s BMI (${marksObject.hisBmi}) is higher than ${
//         JohnObject["first" + namekey]
//       } ${JohnObject["last" + namekey]} BMI`
//     : `${JohnObject["first" + namekey]} ${
//         JohnObject["last" + namekey]
//       }'s BMI (${JohnObject.hisBmi}) is higher than ${
//         marksObject["first" + namekey]
//       } BMI`;
// console.log(higherBmi);
// `${marksObject.hisBmi} > ${JohnObject.hisBmi}? ${
//   marksObject["first" + namekey]
// }`

// loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting wight in repition ${rep}🤸‍♀️`);
// }

// const jonas = [
//   "jonas",
//   "Schemed",
//   2037 - 1991,
//   "teacher",
//   ["micheal", "peter", "steven,"],
//   true,
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
// // console.log(types);
// const years = [1991, 2007, 1996, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
//   ages.push(2037 - years[i]);
// }
// console.log(ages);
// const jonas = [
//   "jonas",
//   "Schemed",
//   2037 - 1991,
//   "teacher",
//   ["micheal", "peter", "steven,"],
// ];
// let jonasNew = [];
// for (let i = jonas.length - 1; i >= 0; i--) {
//   jonasNew.push(jonas[i]);
// }
// console.log(jonasNew);

// for (let excersize = 1; excersize < 4; excersize++) {
//   console.log(`----starting excersize${excersize}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`lifting weight repition${rep}`);
//   }
// }

// while loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting wight in repition ${rep}🤸‍♀️`);
// }

// let rep = 0;
// while (rep <= 10) {
//   console.log(`WHILE:lifting wight in repition ${rep}🤸‍♀️`);
//   rep++;
// }

// // rolling dice example
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(` you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("loop is abt to end");
//   }
// }

// code challange
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];
// function calcTip(bills) {
//   // const smallTip = (15 / 100) * bills;
//   // const bigTip = (20 / 100) * bills;
//   // const eachTips = bill >= 50 && bill <= 300 ? smallTip : bigTip;
//   // return eachTips;
//   for (let i = 0; i < bills.length; i++) {
//     // console.log(bills);
//     if (bills[i] >= 50 && bills[i] <= 300) {
//       const smallTip = (15 / 100) * bills[i];
//       tips.push(smallTip);
//     } else {
//       const bigTip = (20 / 100) * bills[i];
//       tips.push(bigTip);
//     }
//     // console.log(tips);
//     for (let x = 0; x < tips.length; x++) {
//       if (x < tips.length) {
//         const totalCal = bills[i] + tips[x];
//         console.log(`${totalCal} starts here`);
//         total.push(totalCal);
//         console.log(total);
//       }
//     }
//   }
// }
// calcTip(bills);

// correction on code challange
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

function calcTip(bill) {
  const smallTip = (15 / 100) * bill;
  const bigTip = (20 / 100) * bill;
  return bill >= 50 && bill <= 300 ? smallTip : bigTip;
}
for (let i = 0; i < bill.length; i++) {
  const tip = calcTip(bill[i]);
  tips.push(tip);
  total.push(tip + bill[i]);
}

const calAverage = function (arr) {
  let sum = 0;
  let avera = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    avera = sum / arr.length;
  }
  return avera;
};
console.log(calAverage([2, 3, 7]));
console.log(calAverage(total));
console.log(calAverage(tips));
