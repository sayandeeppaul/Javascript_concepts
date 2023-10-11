let password = document.querySelector("#password")
let message = document.querySelector("#message")
let strength = document.querySelector("#strength")
let eyeIcon = document.getElementById("eye-icon")
let generateBtn = document.querySelector(".generate-btn")

let passwordLength = 12

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbols = "!@#$%^&*(){}[]?><:;+-/"

// 4            5             4           5
// ABCD         abcde       1234        !@#$%

//passwordLength    password.length
//    12         >       6
//    12                 18

//12 > 10

const allChars = upperCase + lowerCase + numbers + symbols

function generatePassword() {
    let randomPassword = ""
    randomPassword += upperCase[Math.floor(Math.random() * upperCase.length)]
    randomPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    randomPassword += numbers[Math.floor(Math.random() * numbers.length)]
    randomPassword += symbols[Math.floor(Math.random() * symbols.length)]

    while (passwordLength > randomPassword.length) {
        randomPassword += allChars[Math.floor(Math.random() * allChars.length)]
    }
    password.value = randomPassword
}

function copyPassword() {
    password.select()
    document.execCommand("copy")
}

password.addEventListener("input", () => {
    if (password.value.length > 0) {
        message.style.display = 'block'
    }
    else {
        message.style.display = 'none'
    }
    if (password.value.length < 4) {
        strength.innerText = "Weak"
        strength.style.color = "red"
        password.style.border = "2px solid red"
        if (password.value.length === 0) {
            password.style.border = "none"
        }

    }
    else if (password.value.length >= 4 && password.value.length < 8) {
        strength.innerText = "Medium"
        strength.style.color = "orange"
        password.style.border = "2px solid orange"
    }
    else {
        strength.innerText = "Strong"
        strength.style.color = "green"
        password.style.border = "2px solid green"
    }
})

eyeIcon.onclick = () => {
    if (password.type == 'password') {
        password.type = 'text'
        eyeIcon.innerText = "visibility"
    }
    else {
        password.type = 'password'
        eyeIcon.innerText = "visibility_off"
    }
}