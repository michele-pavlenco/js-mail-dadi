
// let email = prompt("inserisci la tua e-mail")
// const emailAutorizzate = ["email@gmail.com", "helloworld@icloud.com"]
const div = document.querySelector("div.app");
// console.log("email")
// console.log.length("emailAutorizzate")
// let coincide = false
// let index 


// for (let i = 0; i < emailAutorizzate.length; i++) {
//     console.log(email)
//     if (email === emailAutorizzate) {
//         coincide = true
//         index = i
//     }
//     if (coincide){
//         div.append("L' email è valida")

//     }
// else {
//     div.append("L' email non è valida")

// }

const risultatoGiocatore = document.querySelector("div.risgiocatore")
const risultatoComputer = document.querySelector("div.riscomputer")



let giocatore = Math.floor(Math.random() * 6) + 1;
console.log(giocatore)
let computer = Math.floor(Math.random() * 6) + 1;
console.log(computer)



    if (giocatore > computer) {
        const risultato = document.createElement("div");
        risultato.innerHTML = `
             <h3> Hai vinto tu </h3>
            `;
        div.append("computer:",computer, risultato,"tu:", giocatore);
    } else if (giocatore < computer) {
        const risultato = document.createElement("div");
        risultato.innerHTML = `
             <h3> Ha vinto il computer </h3>
            `;
        div.append("computer:",computer, risultato,"tu:", giocatore);
    } else {
        const risultato = document.createElement("div");
        risultato.innerHTML = `
             <h3>Parità</h3>
            `;
        div.append("computer:",computer, risultato,"tu:", giocatore);
    }