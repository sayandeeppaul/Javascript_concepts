const user = {
    userName: "Sayantan",
    coursePrice: 9999,
    courseInstructor: 'Sayanadeep',
    courseName: "Javascript Masterclass with me",

    welcomeMessage: function () {
        // console.log(`Welcome ${this.userName}, you have successfully enrolled in the course of ${this.courseName}`);
    },

    demoConsole:function () {
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.userName="Legend Kanu"
// user.welcomeMessage()

// user.demoConsole()
// console.log(this);              // when we want to display "this" in node env in a Global scope it will return {}

// function one() {
//     console.log("one")
// }

// one()

// arrow function=================>

// const two=()=>{
//     let name = "priyangshu"
//     console.log(name)             // we can not use this keyword inside a function
// }

// two()

// const addTwoValue = (num1,num2)=>{
//     return num1+num2
// } 

// console.log(addTwoValue(5,6))