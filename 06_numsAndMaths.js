const score = 400;
console.log(score);

const balance = new Number(33);
console.log(balance.toString().length);     // You can use number as a string then use string methods on it

console.log(balance.toFixed(2));    //33.00

const otherNumbers =  232.8967
console.log(otherNumbers.toPrecision(4));       //  232.9

const highNumber = 1000000;
console.log(highNumber.toLocaleString("en-IN"));        //      10,00,000   ****toLocaleString() helps us to add commas in between numbers but we can use "en-IN" to set it to Indian Standard


//++++++++++++++++++++++++++++++    MATHS   +++++++++++++++++++++++++++

console.log(Math);  //Object [Math] {}
console.log(Math.abs(-4));  //4
console.log(Math.round(4.3));   //4
console.log(Math.ceil(4.1));    //5
console.log(Math.floor(4.1));   //4

console.log(Math.min(2,54,6,2,4,3,-1));     //-1
console.log(Math.max(3,5,2,5,7,8,2));       //8


console.log(Math.random());     // value btw 0 and 1
console.log(Math.random()*10);     //8.720327944910076
// to avoid a case where we might get 0 we use + 1
console.log(Math.random()*10 + 1);

console.log(Math.floor(Math.random()*10 + 1));

// From Min to Max

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)+min));



