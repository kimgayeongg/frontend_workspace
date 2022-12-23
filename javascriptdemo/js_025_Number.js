//js_025_Number.js

let data = 10;
let fData = Number(data);
let nObj = new Number(data);
console.log(`data=${typeof data}`);
console.log(`fData=${typeof fData}`);
console.log(`nObj=${typeof nObj}`);

//toString() : number, Number -> string
console.log(typeof nObj.toString());
console.log(typeof data.toString());

console.log(data + fData);
console.log(data + nObj);

console.log(typeof nObj.valueOf());
console.log(typeof new String('javascript').valueOf());

//let val = '10.0';
//let val = '10.3';
//let val = 'A';
let val = '10A';
//let val = 'A10';
console.log(val + val);
console.log(val);

//Number(), parseInt()
console.log(Number(val) + Number(val)); //20 20.6   NaN  NaN  NaN
console.log(parseInt(val) + parseInt(val)); //20 20    NaN  20  NaN
console.log(parseFloat(val) + parseFloat(val)); //20 20.6
