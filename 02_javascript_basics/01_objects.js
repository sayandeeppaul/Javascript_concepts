// singleton

// object literals

const foodieBuddyUserActivity={
    //key : value
    'name':'Nirbhaya',
    'age':20,
    'email':'nirbhay@google.com',
    'isLoggedIn':true,
    'likedFood':["chilli chicken","chicken biriyani"],
    address:{
        city:'asansol',
        pincode:713303
    }
}

// console.log(foodieBuddyUserActivity);

foodieBuddyUserActivity.name='Nirbhay'

// console.log(foodieBuddyUserActivity.name);      //using . operator we can access object values
// console.log(foodieBuddyUserActivity["age"]);

// foodieBuddyUserActivity.likedFood=["sayandeep","nirbhay"]
// Object.freeze(foodieBuddyUserActivity)         // its use to freeze data in the object after doing this operation we can't modify our object
// foodieBuddyUserActivity.likedFood=["sayandeep","nirbhay"]

foodieBuddyUserActivity.greeting=function() {
    console.log(`welcome ${this.name}`)
    // console.log("welcome",this.name)
}
console.log(foodieBuddyUserActivity.greeting());        //interesting