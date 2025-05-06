// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temparatures = [3, -2, , -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// // whats temparature amplitude? its the difference between hignest and lowest temp
// // - how to comptute the max and min tem
// // -what is a sensorerrorand what to do when error occurs
// // console.log();
// // 2) sub problems
// // how ro ignore error
// // find max value in array
// // find min value in array
// // subtract min from max and return

// const tempAmpitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//     console.log(max, min);
//   }
//   return max - min;
// };
// const amplitude = tempAmpitude(temparatures);
// console.log(amplitude);

// const newtempAmpitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//     console.log(max, min);
//   }
//   return max - min;
// };
// const newamplitude = newtempAmpitude([3, 5, 1], [9, 0, 5]);
// console.log(newamplitude);

// const measurekelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // value: Number(prompt(" degrees celsuis:")),
//     value: 10,
//   };
//   console.log(measurement);
//   const Kelvin = measurement.value + 273;
//   return Kelvin;
// };
// console.log(measurekelvin());
// const newtempAmpitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//     console.log(max, min);
//   }
//   return max - min;
// };
// const newamplitude = newtempAmpitude([3, 5, 1], [9, 0, 5]);
// console.log(newamplitude);

// code challange
// test 1
// const testOne = [17, 21, 23];
// const testTwo = [12, 5, -5, 0, 4];
// let emptyString = "";

// const printForcast = function (arr) {
//   for (let i = 0; i < testOne.length; i++) {
//     emptyString += `...${testOne[i]}C in ${i + 1} days `;
//   }
// };
// printForcast(testOne);
// console.log(emptyString);
