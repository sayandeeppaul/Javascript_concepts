// IIFE ==> Immediate Invoked function Expressions
// a=100

(function DBConnect(){
    console.log("DB Connect Successfully")
})();

(()=>{
    console.log("Backend Connected successfully");
})()

// a=200
// DBConnect()

// (
//    Function Defination
// )  (Function call)