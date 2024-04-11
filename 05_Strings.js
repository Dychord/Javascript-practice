const name = "Vikram"
console.log(`This is the way to use backticks, undestood ${name} ?`);

const gameName = new String('Mario');
console.log(gameName);
console.log(gameName[0]);  // M

console.log(gameName.__proto__);    // {}

console.log(gameName.length);   //5

console.log(gameName.toUpperCase());

console.log(gameName.charAt('4'));      // what is at which position
console.log(gameName.indexOf('i'));     // which character is at which position

const newString = gameName.substring(0,4);  // last value is excluded so it's only 0-3;
console.log(newString);

// .slice obeys negative values but .substring don't

//************************************** */

const nameOne = "        Honey Singh          ";     //Honey Singh
console.log(nameOne);
let bro = nameOne.trim();
console.log(bro);           //Honey Singh

/*********************************** */

//when you give space in any URL browser tends to represents it by %20 by default

const url = "http://www.vikram.com/home%20alone";

console.log(url.replace("%20",'-'));