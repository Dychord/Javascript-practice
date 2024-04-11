const myDate = new Date()
console.log(myDate);        //  2024-03-22T05:26:41.746Z
console.log(myDate.toDateString());     //Fri Mar 22 2024
console.log(myDate.toString());     //Fri Mar 22 2024 10:58:27 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());  //2024-03-22T05:28:27.990Z
console.log(myDate.toJSON());       //2024-03-22T05:28:27.990Z
console.log(myDate.toLocaleDateString());       //3/22/2024
console.log(myDate.toLocaleString());       //3/22/2024, 11:00:30 AM
console.log(myDate.toLocaleTimeString());   //11:00:30 AM

/*************************MY PERSONAL FAVS*****************************/
// .toLocaleTimeString()     =>      11:00:30 AM
// .toLocaleString()     =>      3/22/2024, 11:00:30 AM
// .toLocaleDateString()     =>      3/22/2024
// .toDateString()     =>      Fri Mar 22 2024
// .toString()     =>      Fri Mar 22 2024 10:58:27 GMT+0530 (India Standard Time)

console.log(typeof Date);       //function
console.log(typeof myDate);     //object


/*************************YOU CAN ALSO GIVE YOUR OWN DATES******************************/
const myCreatedDate = new Date(2023,0,14)
console.log(myCreatedDate.toDateString());      //Sat Jan 14 2023
const myCreatedDate2 = new Date(2023,0,1,3,4)
console.log(myCreatedDate2.toLocaleString());       //1/1/2023, 3:04:00 AM
const myCreatedDate3 = new Date("2024-01-23")
console.log(myCreatedDate3.toLocaleTimeString());       //5:30:00 AM

//*************************TIME STAMPS***************************************************/
const timeStamp = Date.now()        // now() will the time in miliseconds from 1 Jan 1970 to now
console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

/*************************SUPPOSE YOU WANNA PRINT DATE AND TIME**************************/
const yourDate = new Date();
console.log(`Your date is ${yourDate.getDate()} and your time is ${yourDate.getTime()}`);       //Your date is 22 and your time is 1711086923039

const a = yourDate.toLocaleString('default',{
    weekday: 'long'
})
console.log(a);

