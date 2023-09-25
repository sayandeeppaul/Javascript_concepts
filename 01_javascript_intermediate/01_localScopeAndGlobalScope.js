// let a = 100
// let b = 200
// var c = 300
if (true) 
{
    let a = 10
    const b = 20
    var c = 30
    console.log("inner b ",b);
}

console.log(a);
console.log(b);
console.log(c);

for (let index = 1; index <= 10; index++) {
    console.log(index);
}
console.log(index);

// var => never use because the problem of global scope & it doesn't have any local scope
