//any types - be wary of using these!! removes usefulness of ts, honestly
//below is not equal to a number, still equal to any
let age: any = 25;

// this all works
age = true;
age = 'hello';
age = { name: 'maria'};

console.log(age);

let mixedArray: any[] =[];

mixedArray.push(5);
mixedArray.push('hello');
mixedArray.push(false);
console.log(mixedArray);

let newArraything: {name: any, age: any};
console.log(newArraything);
