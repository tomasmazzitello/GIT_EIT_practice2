let form = document.getElementById("form")
let name = document.getElementById("name")
let last_name = document.getElementById("last_name")
let email = document.getElementById("email")
let number = document.getElementById("number")
let user = document.getElementById("user")
let pass = document.getElementById("pass")
let paragraph = document.getElementById("warning")

form.addEventListener("submit", e =>{
    e.preventDefault()
    let warning = ""
    let enter = false
    let regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regex_number = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
    paragraph.innerHTML= ""
    if (name.value.length < 3 || name.value.length > 21) {
        warning += `Name is wrong. <br>`
        enter = true
    }
    if (last_name.value.length < 3 || last_name.value.length > 40) {
        warning += `Last name is wrong. <br>`
        enter = true
    }if (!regex_email.test(email.value)) {
        warning += `The email adress is wrong. <br>`
        enter = true
    }if (!regex_number.test(number.value)) {
        warning += `The cellphone number is wrong. <br>`
        enter = true
    }if (user.value.length < 3 || name.value.length > 21) {
        warning += `Your username is wrong. <br>`
        enter = true
    }if (pass.value.length < 3 || pass.value.length > 21 || pass.value.trim() === "") {
        warning += `Password is wrong.`
        enter = true
    }if (enter) {
        paragraph.innerHTML = warning
    }else{
        paragraph.innerHTML = `Sended`
    }

})
