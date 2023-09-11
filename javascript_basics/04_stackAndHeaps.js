// stacks       stored all the premitive types
let a = 2
let b = a
a = a + 2
// console.log([a,b]);

// heap         stored all the non-premitive types

let userOne = {
    email: 'sayandeep775@gmail,com'
}

let userTwo = userOne
userOne.email = "abcd@gmail.com"

let temp1 = {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
}

let temp2 = temp1

temp2.temp = 198.48

console.log(temp1, temp2);


// userTwo.email

console.log(userTwo.email);
console.log(userOne.email);