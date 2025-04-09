// let js = "amazing";
// if (js === "amazing") alert("javascript is fun!");

// console.log(40 + 8 + 23 - 10);

// let firstname = "jonas";
// console.log(firstname);

// const ageJohnas = 2037 - 1991;
// const ageSare = 2037 - 2018;

// console.log(2 ** 3);
// const firstName = "ageJohnas";
// const lastName = "agechichi";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// console.log(x);
// const averageAge = (ageJohnas + ageSare) / 2;
// console.log(ageSare, ageJohnas, averageAge);

// // code challage
// //Test one
// const marksFirstWeight = 78;
// const marksFirstHeight = 1.69;
// const marksFirstBMI = marksFirstWeight / (marksFirstHeight * marksFirstHeight);
// // john
// const johnsFirstWeight = 92;
// const johnsFirstHeight = 1.95;
// const johnsFirstBMI = johnsFirstWeight / (johnsFirstHeight * johnsFirstHeight);
// console.log(marksFirstBMI, johnsFirstBMI);
// // the test1
// const markHigherBMI = marksFirstBMI > johnsFirstBMI;
// console.log(markHigherBMI);
// // test 2
// const markSecondweight = 95;
// const markSecondHeight = 1.88;
// const markSecondBMI = markSecondweight / (markSecondHeight * markSecondHeight);
// // john
// const johnsSecondWeight = 85;
// const johnsSecondHeight = 1.76;
// const johnsSecondBMI =
//   johnsSecondWeight / (johnsSecondHeight * johnsSecondHeight);

// // the test 2
// console.log(markSecondBMI, johnsSecondBMI);
// const markHigherBMITwo = markSecondBMI > johnsSecondBMI;
// console.log(markHigherBMITwo);

// strings
// const firstName = "jonas";
// const job = "teacher";
// const birthyear = 1991;
// const year = 2037;

// const jonas =
//   "i'm " + firstName + " a " + (year - birthyear) + " years old " + job + "!S";
// console.log(jonas);

// const jonasNew = `I'm ${firstName} a ${year - birthyear} year old ${job}`;
// console.log(jonasNew);
// console.log(`hello
// hiii
//  whasup`);

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("sara can start driving leasons 👌");
// } else {
//   const yearsleft = 18 - age;
//   console.log(`sara is too younge, wait ${yearsleft} years`);
// }

// const birthyear = 1991;
// let centuary;

// if (birthyear <= 2000) {
//   centuary = 20;
// } else {
//   centuary = 21;
// }

// console.log(centuary);

// // code challange 2

// if (markSecondBMI > johnsSecondBMI) {
//   console.log(
//     `marks BMI ${markSecondBMI} is higher than johns ${johnsSecondBMI} BMI`
//   );
// } else {
//   console.log(
//     `johns BMI ${johnsSecondBMI} is higher than mark ${markSecondBMI} BMI`
//   );
// }

// type conversion and coercion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(inputYear + 18);
// console.log(String(23));

// // type coercion
// console.log("23" - "10" - 3);
// console.log("23" / " 2");
// console.log(" 23" > " 18"start);
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//   console.log("dont spend any money ");
// } else {
//   console.log(" you sh ould get a job ");
// }

// const age = "18";
// if (age === 18) {
//   console.log("up to an adult");
// }
// if (age == 18) {
//   console.log("up to an adult losse");
// }
// const favorite = Number(prompt(" whats your favorite number"));
// console.log(favorite);

// if (favorite == 23) {
//   console.log("cool 23 is an amazing number");
// }
// if (favorite == 23) {
//   console.log("cool 23 is an amazing number");
// } else if (favorite == 7) {
//   7;
//   console.log("  is also a good age");
// } else {
//   console.log("age not recognised");
// }

// const hasDriversLicence = true;
// const hasGoodVision = true;
// const isTired = false;

// console.log(hasDriversLicence && hasGoodVision && isTired);
// console.log(hasDriversLicence || hasGoodVision) || isTired;
// console.log(hasDriversLicence || !hasGoodVision);
// console.log(!hasDriversLicence || hasGoodVision);

// const shouldDrive = hasDriversLicence && hasGoodVision;
// if (hasDriversLicence && hasGoodVision && isTired) {
//   console.log("sara should be able to drive");
// } else {
//   console.log("someone else should drive");
// }
//

// code challange
// // dolphins and koalas
// const dolphineFirstTest = (96 + 108 + 89) / 3;
// const koalasFirstTest = (88 + 91 + 110) / 3;
// console.log(dolphineFirstTest, koalasFirstTest);

// if (dolphineFirstTest > koalasFirstTest) {
//   console.log("dolphins are higher ");
// } else if (koalasFirstTest > dolphineFirstTest) {
//   console.log("kolas is higher ");
// } else if (koalasFirstTest === dolphineFirstTest) {
//   console.log("both win ");
// } else {
//   console.log("none ");
// }

// // Bonus 1
// const dolphineSecondTest = (97 + 112 + 101) / 3;
// const koalassecondTest = (109 + 95 + 123) / 3;
// const requiredScore = 100;

// if (
//   dolphineSecondTest > koalassecondTest &&
//   dolphineSecondTest >= requiredScore
// ) {
//   console.log("dolphine beat koalas and have over a hundred point");
// } else if (
//   koalassecondTest > dolphineSecondTest &&
//   koalassecondTest >= requiredScore
// ) {
//   console.log("koalas beat dolphine and have over a hundred points");
// }
// console.log(dolphineSecondTest);
// console.log(koalassecondTest);

// // bonus 2
// const koalaThirdTest = (109 + 95 + 106) / 3;
// const dolphineThirdTest = (97 + 112 + 101) / 3;
// console.log(koalaThirdTest, dolphineThirdTest);

const day = "fri  day";
// switch (day) {
//   case " monday":
//     console.log("play couse structure");
//     console.log("Go to coding meetup");
//     break;
//   case " tuesday":
//     console.log("prepare theory video");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("prepare the code examples");
//     break;
//   case " friday":
//     console.log("record videos");
//     break;
//   case "satuarday":
//   case "sunday":
//     console.log("enjoy the weekend");
//     break;
//   default:
//     console.log("not a valid day");
// }

// if (day === "monday") {
//   console.log("play couse structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare theory video");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("prepare the code examples");
// } else if (day === "friday") {
//   console.log("record videos");
// } else if (day === "satuarday" || day === " sunday") {
//   console.log("enjoy the weekend");
// } else {
//   console.log("not a valid day");
// }

// const age = 23;
// age >= 18
//   ? console.log("i like to drink wine")
//   : console.log("i like to drink water");
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// code challange
// test 1

const bill = 430;
const smallTip = (15 / 100) * bill;
const bigTip = (20 / 100) * bill;
const tips = bill >= 50 && bill <= 300 ? smallTip : bigTip;
console.log(
  `The bill is ${bill}, The tip is ${tips}, Total value is ${bill + tips}`
);
