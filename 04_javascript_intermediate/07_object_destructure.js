// lets have an demo object

const foodieBuddyUserActivity={
    //key : value
    'name':'Nirbhaya',
    'age':20,
    'email':'nirbhay@google.com',
    'myHomeAddessLocationBasedOnTheCountry' : 'Nirsha',
    'isLoggedIn':true,
    'likedFood':["chilli chicken","chicken biriyani"],
    address:{
        city:'asansol',
        pincode:713303
    }
}

const AlgoDeskUserActivity={
    //key : value
    'name':'Sayantan',
    'age':20,
    'email':'sayantan@chatgpt.com',
    'isLoggedIn':true,
    'likedFood':["chilli chicken","chicken biriyani"],
    address:{
        city:'dhanbad',
        pincode:713303
    }
}

const DocsWorldUserActivity={
    //key : value
    'name':'Sayantan',
    'age':20,
    'email':'priyanshu@microsoft.com',
    'isLoggedIn':true,
    'likedFood':["chilli chicken","chicken biriyani"],
    address:{
        city:'kolkata',
        pincode:713303,
            country:{
                name: 'India',
                countryCode : '+91'
            }
    }
}

// one way to access the values
// console.log(foodieBuddyUserActivity['name']);

// second way to access the values
// console.log(foodieBuddyUserActivity['name']);

// ======================================== Object Destructuring ============================================

// const {name} = foodieBuddyUserActivity
// const {email : algoUserEmail} = AlgoDeskUserActivity
// const {email : docsUserEmail} = DocsWorldUserActivity
// const {email : foodUserEmail} = foodieBuddyUserActivity

// const {isLoggedIn : login} = AlgoDeskUserActivity
// const {myHomeAddessLocationBasedOnTheCountry : address} = foodieBuddyUserActivity

// console.log(address);
// console.log(isLoggedIn)
// console.log(algoUserEmail,docsUserEmail,foodUserEmail);

// console.log(`hello this side ${name}`)
// const {city,pincode} = DocsWorldUserActivity.address
// console.log(city,pincode);
// const {name:countryName,countryCode} = DocsWorldUserActivity.address.country
// console.log(`Country is : ${countryName} & its code is : ${countryCode}`);