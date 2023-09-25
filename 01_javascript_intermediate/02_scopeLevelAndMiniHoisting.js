// function one() {
//     const userName = "Priyanshu"
//     function two() 
//     {
//         const email = "priyanshu@chatgpt.com"
//         console.log(`${userName} ${email}`);
//     }
//     two()
// }
// one()

// closure ====> 
// variable that declare in the parent function or parent scope can be accessable anywhere into it's child scope or function but vice-versa is not possible

console.log(addTwoValue(2,3))           // it execute perfectly

function addTwoValue(num1,num2) {
    return num1+num2
}

console.log(addTwoValue(2,3))           // it'll show an error because the  addTwoFunction is not initialized

const addTwoValue = function (num1,num2) {
    return num1+num2
}


