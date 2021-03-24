//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi'; <-- nope
age = 30;

// isLoggedIn = 25; <-- nope
isLoggedIn = true;

//arrays
let ninjas: string[] = []; 
//initialize with a value in order to do .push because without = [] it's not initialized, just defining the type!
// ninjas = [10, 23]; <--nope

ninjas.push('ninja1', 'bruce lee');

//union types
let mixedArray: (string | number)[] = [];
mixedArray.push('helloooo');
mixedArray.push(50);
// mixedArray.push(false); <--- doesn't work because we didn't include it in the union type above
//(string|number|boolean) to get it to work
//only use () when types are in front of an array
console.log(mixedArray);

let hello: number|string;
hello = 'hey';
hello = 43110;
// hello = false; <-- nahhh

//objects
let goodbye: object;
goodbye = {
  this: 'that',
  those: 40
}

goodbye = {
  this: 'maybe',
  those: 100
}

//can set an object to have specific types, must explicitly have all these key-value pairs with these types
let okay: {
  age: number,
  name: string,
  experience: boolean  
}

