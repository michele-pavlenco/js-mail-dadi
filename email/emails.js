
let email = prompt("inserisci la tua e-mail")
const emailAutorizzate = ["helloworld@gmail.com", "helloworld@icloud.com", "helloworld@live.it"]
const div = document.querySelector("div.app");
console.log("email")
console.log(emailAutorizzate)
let coincide = false


for (let i = 0; i < emailAutorizzate.length; i++) {

    if (email === emailAutorizzate[i]) {
        coincide = true
    }
}
if (coincide) {
    div.append("L' email è valida")

}
else {
    div.append("L' email non è valida")

}
