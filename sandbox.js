//explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi'; <-- nope
age = 30;
// isLoggedIn = 25; <-- nope
isLoggedIn = true;
//arrays
var ninjas = [];
//initialize with a value in order to do .push because without = [] it's not initialized, just defining the type!
// ninjas = [10, 23]; <--nope
ninjas.push('ninja1', 'bruce lee');
//union types
var mixedArray = [];
mixedArray.push('helloooo');
mixedArray.push(50);
// mixedArray.push(false); <--- doesn't work because we didn't include it in the union type above
//(string|number|boolean) to get it to work
//only use () when types are in front of an array
console.log(mixedArray);
var hello;
hello = 'hey';
hello = 43110;
// hello = false; <-- nahhh
//objects
var goodbye;
goodbye = {
    "this": 'that',
    those: 40
};
goodbye = {
    "this": 'maybe',
    those: 100
};
//can set an object to have specific types, must explicitly have all these key-value pairs with these types
var okay;
