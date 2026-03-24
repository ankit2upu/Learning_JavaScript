// type conversion  Number(), Boolean(), String();


//  Number()
console.log("**********Number Conversion*************");

let score="73"

console.log(typeof score);  //string
let valueInNumber=Number(score)
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);   //73 **

console.log(typeof score);   // string

let score1="abcd "
let valueInNumber1=Number(score1) 
console.log(typeof valueInNumber1); // number  
console.log(valueInNumber1);     //NaN *****


let x=null
console.log(x);
console.log(Number(x));   // 0
console.log(typeof Number(x));   //number


let y=undefined
console.log(Number(undefined));    // NaN
console.log(typeof Number(undefined));   // number 

let isTrue=true
console.log(isTrue);   //true
console.log(Number(isTrue));   // 1
console.log(typeof Number(isTrue));   // number


/*  NOTE: if typeConversion of string to Number 
          "33" easy to convert into number print 33
          "abc" can not convert into number print NaN
              but type converted

*/ 

 //Boolean()
console.log("********* Boolean convesion*********");

let logged=1; // number  1->true , 0->false
console.log(Boolean(logged));  // true
console.log(typeof Boolean(logged)); //boolean 

let string="Ankit" //"string"-> true," "-> true ""-> false 
console.log(Boolean(string)); // true
console.log(typeof Boolean(string));  //boolean
  
// String()                           
console.log("************String conversion*************");

let sum=384
console.log(String(sum));  //384
console.log(typeof String(sum));  //string




