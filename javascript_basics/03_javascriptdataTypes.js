// premitive types
let name = "sayandeep"
let age = 20
let isLoggedIn = true
let temp = null   //standalone data
let userId
let a = 2
let b = 2
// normal range of int 2 power 53

let stock = 2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222n

// console.log(a==b);

let id = Symbol('abc')
let userNewId = Symbol('abc')

// console.log(id==userNewId);


// type ===========>

// String
// number
// boolean
// undefined
// null
// bigint

// console.log(typeof stock);

// non premitive type

// array , objects, functions

// array======>
let studenDetails = ["sayandeep", 20, true,]

// objects=========>
let temparature = {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933,
    a: 2
}

// functions=============>

function getAddValue() {
    let value = 0;
    value++;
    console.log(value);
}

// getAddValue()

console.log(typeof getAddValue);