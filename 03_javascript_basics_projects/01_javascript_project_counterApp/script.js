let count = 0

document.querySelector(".decrease").onclick = function () {
    count = count - 1
    console.log(count)
    document.querySelector(".changingVariable").innerText = count

}

document.querySelector(".increase").onclick = function () {
    count = count + 1
    console.log(count)
    document.querySelector(".changingVariable").innerText = count
}