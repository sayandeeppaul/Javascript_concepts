document.querySelector(".button").onclick = function () {
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomColorCode = "#" + randomNumber.toString()
    document.body.style.backgroundColor = randomColorCode
    document.querySelector(".color-code").innerText = randomColorCode
}