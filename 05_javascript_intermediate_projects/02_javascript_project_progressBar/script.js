let number = document.querySelector(".number")
let text = document.querySelector(".text")
let counter = 0

setInterval(()=>{
    if(counter===75){
        clearInterval()
    }else{
        counter+=1
        number.innerHTML = counter + "%"
        text.innerHTML = "Skills"
        text.style.fontWeight="bold"
    }

},28)