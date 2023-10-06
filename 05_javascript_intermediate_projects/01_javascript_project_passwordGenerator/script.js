let password= document.querySelector("#password")
let message= document.querySelector("#message")
let strength= document.querySelector("#strength")
let eyeIcon= document.getElementById("eye-icon")

password.addEventListener("input",()=>{
    if (password.value.length>0) {
        message.style.display='block'
    }
    else{
        message.style.display='none'
    }
    if(password.value.length<4){
        strength.innerText="Weak"
        strength.style.color="red" 
        password.style.border="2px solid red"
        if (password.value.length===0) {
            password.style.border="none"
        }

    }
    else if(password.value.length>=4 && password.value.length<8){
        strength.innerText="Medium"
        strength.style.color="orange"
        password.style.border="2px solid orange"
    }
    else{
        strength.innerText="Strong"
        strength.style.color="green"
        password.style.border="2px solid green"
    }
})

eyeIcon.onclick = ()=>{
    if(password.type=='password'){
        password.type='text'
        eyeIcon.innerText="visibility"
    }
    else{
        password.type='password'
        eyeIcon.innerText="visibility_off"
    }
}