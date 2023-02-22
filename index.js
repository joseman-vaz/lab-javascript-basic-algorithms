console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Jose";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Juan";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops
let spacedDriverName = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedDriverName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedDriverName);

// Not supposed to use .join method but here it is
// let driverNameUpperCase = hacker1.toUpperCase().split("").join(" ");
// console.log(driverNameUpperCase);

let nameReverse = "";
let driverNameReverse = function () {
  for (let i = hacker1.length - 1; i >= 0; i--) {
    let hacker1Reverse = hacker1[i];
    nameReverse += hacker1[i];
  }
  return console.log(nameReverse);
};
driverNameReverse();

let hackersArray = [hacker2, hacker1];
let hackersOrder = hackersArray.sort();
if (hackersOrder[0] == hacker1) {
  console.log("The driver's name goes first.");
} else if (hackersOrder[0] == hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("Need to finish this excersice");
}
