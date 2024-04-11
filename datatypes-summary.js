/*

In javascript datatypes are basically divided into 2 main parts 
#Primitive and #Non-Primitive
Primitive are of 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt(We use n in the end of the number to make it bigint).

Reference Types - Array, Objects, Functions

JavaScript is a dynamically typed language, which means that data types of variables 
are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

*/
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);  // true

let score = 23948239402n;  // this is now bigint

//******************REFERENCE TYPE********************

const arr = ["Shaktiman", "Naagraj", "Hero"] // Array

let myObj = {                               // Object
    name: "Vikram",
    age: 22,
}
console.log(myObj);

// In javascript we can store functions inside a variable

const myFunction = function(){
    console.log("Hello");
}

console.log(Function());


/*
Return type in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//****************************************HEAP VS STACK*************************************//

let userOne = {
    name: "Vikram",
    email:"Vikram@gmail.com"
}

console.log(userOne);

let userTwo = userOne;
console.log(userTwo);

userTwo.email = "Nitin@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);