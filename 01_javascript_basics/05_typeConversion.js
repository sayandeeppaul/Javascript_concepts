let a = '15abc'
// String=====>number
let b = Number(a)
// boolean=====>number
let c=true
let d = Number(c)

let score = "33abc"                         //string
// console.log(typeof score);

let valueInNumber = Number(score)           // number
console.log(typeof valueInNumber);          // number
console.log(valueInNumber);                 // Not a Number

//"33abc"           string
//when when forcefully convert this into number it'll display NaN
//true              boolean
//when when forcefully convert this into number it'll display 1
//false              boolean
//when when forcefully convert this into number it'll display 0

let string1 = "sayandeep"
let boolString=Boolean(string1)
console.log(boolString);

// ""=====> false in boolean
// rest return true

let string2 = "sayandeep"
let numString=Number(string2)
console.log(numString);

// ""=====> 0 in number
// rest return 1

let x=15
let y= String(x)
console.log(typeof y);
console.log(y);