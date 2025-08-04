 //  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

// const myFunction = function(){
//     console.log("Hello world");
// }
// myFunction()

function greet(a,b){
    return a+b        
}
// hey=greet(2,3)
//  console.log(hey);
 
// console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ############################# stack & Heap memory allocation

//refrance copy
// let a = 123;
// let b = a;// b is only copy the address of a when it assign a new value it overrides and stored a new address
// b = 567
// console.log(b);

// let userOne ={
//     email:"raj@gmail.com",
//     pass:"123"
// }

// let userTwo = userOne//referance copy
// userTwo.email="ram@gamil.com"
// console.log(userOne.email);
// console.log(userTwo.email);



//shallow copy
//1 array.slice()##
// const fruits = ["apple", "banana", "cherry", "date"];
// const sliced = fruits.slice(1, 3);

// console.log(sliced); // Output: ["banana", "cherry"]
// console.log(fruits); // Original stays unchanged: ["apple", "banana", "cherry", "date"]

//2 spread Operator##
// const nums = [1, 2, 3];
// const copy = [...nums];
// copy.push(4);

// console.log(copy); // Output: [1, 2, 3, 4]
// console.log(nums); // Original stays: [1, 2, 3]

//3 Object.assign()
// let obj = {x: 1, y: {z: 2}};
// let copy = Object.assign({}, obj);
// console.log(copy);
// copy.y.z=100
// console.log(copy.y.z);
// console.log(obj);

//deep copy
//JSON-based (quick & dirty):
// let a = {x: 1, y: {z: 2}};
// let b = JSON.parse(JSON.stringify(a));
// b.y.z=100
// console.log(b);
// console.log(a);

//libs like lodash
// import cloneDeep from "lodash/cloneDeep";
// let b = cloneDeep(a);

// stringify
let user = {
  name: "Rajkishore",
  age: 24,
  skills: ["JavaScript", "Python", "React"]
};

let jsonString = JSON.stringify(user);
console.log(jsonString);// it convert into string type
//parse
let parsedUser = JSON.parse(jsonString);// it converted into prase type
console.log(parsedUser.name); // Rajkishore
console.log(parsedUser.skills[0]); // JavaScript

// combination of both
let original = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(original));

console.log(deepCopy);

deepCopy.b.c= 999;
console.log(deepCopy.b.c); 
console.log(original.b.c);// Still 2 — original untouched


  