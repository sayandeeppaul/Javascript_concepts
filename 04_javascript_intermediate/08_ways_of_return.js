// ==================================== 1st way of return ================================== 
const  name = ()=>{
    return 'Ashpriha'
}
// console.log(name())

//===================================== 2nd way of return =================================
const age = ()=>(20)
// console.log(age())

// const sumOfTwo=(a,b)=>{
//     return a+b
// }
const sumOfTwo=(a,b)=>(a+b)
console.log(sumOfTwo(10,20))