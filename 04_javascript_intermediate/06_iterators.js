// ************************************** for loop **********************************************

// if we want to print 1-10 using for loop

// for (let index = 1; index <= 10; index++) {
//     console.log(index); 
// }

// continue statement       used to skip the iteration

// for (let index = 1; index <= 10; index++) {
//     if(index==5){
//         continue
//     }
//     console.log(index);
// }

// braek statement          used to break out from a particular peek point

// for (let index = 1; index <= 10; index++) {
//     if(index==5){
//         break
//     }
//     console.log(index);
// }


// nested loop

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`outer loop value : ${i} inner loop value ${j}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//     } 
// }

// let array = ["spiderman","batman","shaktiman","doremon","hanuman"]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])  
// }




// ****************************************** while loop **************************************************

// let index=1
// while(index<=10){
//     console.log(index);
//     index++
// }

// let array = new Array("spiderman","batman","shaktiman","doremon","hanuman")

// let index = 0
// while(index<array.length){
//     console.log(array[index]);
//     index++
// }


// ******************************************** do while loop ***********************************************

// let age = 14
// do {
//     console.log("I'm eligible for driving",age)
// } while (age>18);


// let index = 10 
// do {
//     console.log(index);
//     index++
// } while (index>7 && index< 13);


// ***************************************** for of loop ****************************************************

// [
//     {},
//     {},
//     {}
// ]

// let herosArray= ["spiderman","batman","shaktiman","doremon","hanuman"]

// for (const hero in herosArray) {
//     console.log(herosArray[hero])
// }

// for (const hero of herosArray) {
//     console.log(hero)
// }

// let greetings = "hello world"

// for (const greeting of greetings) {
//     if (greeting==" ") {
//         continue
//     }
//     console.log(greeting)
// }


// *************************************** Map ***************************************************

// const map = new Map();

// map.set('IN', 'India');
// map.set('UK', 'United Kingdom');
// map.set('US', 'United States');
// map.set('IN', 'India');
// map.set('UK', 'United Kingdom');

// for (const [key, value] of map) {
//     console.log("the keys are : ",key)
//     console.log("the values are : ",value)
// }

// for (const key in map) {
//     console.log(key)
// }


// we can't use for of loop in objects

// const myObject = {
//     game1:'NFS',
//     game2:'Spiderman',
//     game3:'asphalt 8'
// }

// for (const [key,value] of myObject) {
//     console.log("the keys are : ",key)
//     // console.log("the values are : ",value)
// }


// *************************************** for in loop ***************************************************

// const myObject = {
//     game1:'NFS',
//     game2:'Spiderman',
//     game3:'asphalt 8'
// }

// for (const key in myObject) {
//     console.log(key)
//     console.log(myObject[key]);
// }




// **************************************** for each loop  **************************************************


//                            0    1      2      3      4    5
// const codingLanguages = ["JS","CPP","Java","Python","C","Ruby"]

// codingLanguages
//                 .forEach(
//                             function(item)
//                                 {
//                                 console.log(item)
//                                 }
//                         )

// codingLanguages.forEach( (currentValue, index, arr)=>{console.log(currentValue, index, arr)} )

// const myCoding = [
//     {
//         languageName:'Javascript',
//         extension:'.js'
//     },
//     {
//         languageName:'C Plus Plus',
//         extension:'.cpp'
//     },
//     {
//         languageName:'Python',
//         extension:'.py'
//     }
// ]

// myCoding.forEach( (item)=>{
//     console.log(item.extension)
// } )