


// console.log(validateEmail)
// function verificaEmail(input) {
//     let caratterivalidi = "@";
//     if (input.value.match(caratterivalidi)) {
//         alert("E-mail valida!")
//         document.
//         return true;
//     }&
// }
let email = prompt ("inserisci la tua e-mail")
const emailAutorizzate = ["email@gmail.com" , 'helloworld@icloud.com']
const div = document.querySelector("div.app");
console.log("email")
console.log("emailAutorizzate")


if (email == emailAutorizzate) {
    div.append("L' email è valida")
}
else{
    div.append("L' email non è valida")
    
}