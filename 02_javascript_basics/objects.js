// singleton

// object literals

// const foodieBuddyUserActivity={
//     //key : value
//     'name':'Nirbhaya',
//     'age':20,
//     'email':'nirbhay@google.com',
//     'isLoggedIn':true,
//     'likedFood':["chilli chicken","chicken biriyani"],
//     address:{
//         city:'asansol',
//         pincode:713303
//     }
// }

// console.log(foodieBuddyUserActivity);

// foodieBuddyUserActivity.name='Nirbhay'

// console.log(foodieBuddyUserActivity.name);      //using . operator we can access object values
// console.log(foodieBuddyUserActivity["age"]);

// foodieBuddyUserActivity.likedFood=["sayandeep","nirbhay"]
// Object.freeze(foodieBuddyUserActivity)         // its use to freeze data in the object after doing this operation we can't modify our object
// foodieBuddyUserActivity.likedFood=["sayandeep","nirbhay"]

// foodieBuddyUserActivity.greeting=function() {
    // console.log(`welcome ${this.name}`)
    // console.log("welcome",this.name)
// }
// console.log(foodieBuddyUserActivity.greeting());        //interesting

// const foodieBuddyUser={
//     email:'sayandeep775@gmail.com',
//     userName:{
//         fullname:{
//             firstName:'sayandeep',
//             lastname:'paul'
//         }
//     }
    
// }

// console.log(foodieBuddyUser.userName.fullname.firstName)

// const obj1={
//     1:'a',
//     2:'b'
// }

// const obj2={
//     3:'c',
//     4:'d'
// }

// const obj3={
//     5:'e',
//     6:'f'
// }

// const obj4=Object.assign(obj1,obj2,obj3)
// console.log(obj4)

// const target = { a: 1, b: 2, c:4 };
// const source = { b: 4, c: 5 };

// console.log("printing target object previous value",source);

// const returnedTarget = Object.assign({},source,target);      //read mdn article

// console.log("printing target object new value",source);
// console.log(target);
// console.log(returnedTarget)

// const finalObj={...target,...source}
// console.log(finalObj)

// console.log(Object.keys(target))        //return the keys in array format
// console.log(Object.values(target))          //return the values in array format
// console.log(Object.entries(target))         //return each key-value pair in array format

// console.log(target.hasOwnProperty('k'))         //return true if property is present in the object and vice-versa 