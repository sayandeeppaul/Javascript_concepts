// ========================================== filter ===================================================

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const demoArr=[]

// myNums.forEach((num)=>{
//     if(num>5)
//     {
//         demoArr.push(num)
//     }
// })
// console.log(demoArr)

// const returnedValue = myNums.filter(
//     (num) => {
//             return num > 5
//             })

// console.log(returnedValue);

// const returnedValue = myNums.filter(
//     (num) => (
//             num > 5
//     )
//     )

// const returnedValue = myNums.filter((num) => num > 5)
// console.log(myNums)
// console.log(returnedValue)

// const books =[
//     {
//         title :'let us C',
//         author: 'Rishav Goswami',
//         price:999,
//         genre:'programming'
//     },
//     {
//         title :'python',
//         author: 'Nirbhay Singh',
//         price:1299,
//         genre:'programming'
//     },
//     {
//         title :'Doglapaan',
//         author: 'Ashneer Grover',
//         price:499,
//         genre:'biography'
//     },
//     {
//         title :'sharlock homes',
//         author: 'Sayantan Pandey',
//         price:1599,
//         genre:'ditective'
//     },
//     {
//         title :'Byomkesh Bakshi',
//         author: 'Sayandeep Paul',
//         price:1999,
//         genre:'ditective'
//     },
//     {
//         title :'Ms Dhoni the untold story',
//         author: 'Ashpriha pandey',
//         price:5999,
//         genre:'biography'
//     },
//     {
//         title :'Mahabharat ki katha',
//         author: 'Mondira chanda',
//         price:999,
//         genre:'history'
//     },    
//     {
//         title :'World War',
//         author: 'Barsha routh',
//         price:1799,
//         genre:'history'
//     },
//     {
//         title :'Rich dad poor dad',
//         author: 'priyanshu choubey',
//         price:2799,
//         genre:'Finance'
//     }
// ]

// const filteredBooks=books.filter
//                         ((book)=>(
//                             book.price<1500
//                         ))
//                             .filter((book)=>(book.genre==='programming'))
//                                 .filter((book)=>(book.author==='Nirbhay Singh'))

// console.log(books);
// console.log(filteredBooks);


// ========================================== map ========================================================

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const returnedValue = myNums.map
//             (
//                 (num) => 
//                 {
//                     return num +10
//                 }
//             )
//                 .map((num)=>(num*10))
//                     .filter((num)=>num>150)
//                         .filter((num)=>num>160 && num<190)
//                             .map((num)=>num/10)
//                                 .filter((num)=>num>15 && num<18)
//                                     .filter((num)=>num>100)

// console.log(returnedValue);



// =========================================== reduce =====================================================

// const priceArray = [100,200,300,400,500,1000]

// let initialValue=0

// const total = priceArray.reduce((acc,currVal)=>
//                                             {
//                                                 console.log(`acc => ${acc} currVal => ${currVal}`)
//                                                 return acc+currVal
//                                             },
//                                                 initialValue
//                                                 )
// console.log(total);

// acc => 0 currVal => 100
// acc => 100 currVal => 200
// acc => 300 currVal => 300
// acc => 600 currVal => 400
// acc => 1000 currVal => 500
// acc => 1500 currVal => 1000
// 2500