//question 1

let str = "this is a string!";

//question 2

let person = {
  arms: 2,
  legs: 1
}

//question 3

let outOfStock = true;

if (outOfStock) {
  console.log("Out of stock");
}
else {
  console.log("In stock");
}

//question 4

let num = [9, 7321, 29, 12, 51];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//question 5

for (let i = 15; i < 25; i++) {
  console.log(i);
}
//question 6

for (let i = 15; i < 25; i++) {
  if (i === 20) {
      console.log(i);
  }
}

//question 7

let houses = [
  {
    color: "blue",
    houseNumber: 52,
    hasBasement: false
  },
  {
    color: "green",
    houseNumber: 14,
    hasBasement: true
  }
]

for (i in houses) {
  console.log(houses[i].houseNumber);
  console.log(houses[i].hasBasement);
}

//question 8

function whatIDontLike(arg) {
  return `I don't like ${arg}`;
}

whatIDontLike("damn hippies");

//question 9

function subtract(x, y) {
  return x - y;
}

subtract(15, 8);

//question 10

let arr = [];

function pusher(arg) {
  arr.push(arg);
}

pusher(52);
pusher("eggs");
console.log(arr);