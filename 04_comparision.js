
console.log("2" > 1);       //true
console.log("02" > 1);      // true

console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //false

// Note***** Reason that an equality check == and comparision operators < > <= >= works differently is that 
// Comparisions convert null to a number trating it as 0, 
// that's why null >= 0 is true, while null > = is false

// == and === 
// == just checks the value and === checks both value and datatype
console.log("2" == 2);      //true
console.log("2" === 2);     //false
