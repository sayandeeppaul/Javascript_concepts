let myArr1=["sayandeep",20,5.10,true]
let myArr2=["priyangshu",20,6.10,false]
// console.log(myArr);
// array methods 
// myArr1.push("Nirbhay")           //when we use push method it'll sned the newest data in the last position of the array
// console.log(myArr1);
// myArr1.pop()
// console.log(myArr1);          //when we use pop method it'll remove the data from the last position of the array
// myArr1.unshift("Barsha")         // when we use unshift method it'll right shift every element and then keep our new data on the starting of array
// console.log(myArr1);  
// myArr1.shift()                   // when we use shift method it'll remove new data on the starting of array
// console.log(myArr1); 
// console.log(myArr1.includes("Nirbhay"))      //boolean value return
// console.log(myArr1.indexOf(20))              //return the index value of thhat particular data

// console.log(myArr1.join(myArr2))
let myArr3=myArr1.concat(myArr2)
// console.log(myArr3);

//      0          1   2    3        4          5   6    7
// [ 'sayandeep', 20, 5.1, true, 'priyangshu', 20, 6.1, false ]

//slice && splice
// console.log(myArr3.slice(1,4))                       //slice exclude last index
// console.log(myArr3);                                // not violating main array
// console.log(myArr3.splice(1,4))                    //splice include the last index 
// console.log(myArr3);                               // main array violate

let myArr4=[{},{},{}]
// console.log(myArr4);

// let nestedArray=[[1,2,3],[5,6,7,[8,9,10,[11,12,13,14,[15,16,17,18]]]]]

// console.log(nestedArray);
// console.log(...nestedArray)
// console.log(nestedArray.flat(2));
// console.log(nestedArray.flat(Infinity));

// console.log(Array.isArray(myArr4))
// console.log(Array.from("Nirbhay"))
// Key => Name , Age, height
// Value => Sayandeep, 20, 5.10
// lets supp we want an array from keys============>[name,age,height]
// lets supp we want an array from values============>['sayandeep',20,5.10]

// console.log(Array.from
//     (
//         {
//         name:"sayandeep",
//         age:20,
//         height:5.10
//         }
//     )
// )