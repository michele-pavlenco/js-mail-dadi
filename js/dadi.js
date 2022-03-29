
     const div = document.querySelector("div.risposta")
    



     let giocatore = Math.floor(Math.random() * 6) + 1;
     console.log(giocatore)
     let computer = Math.floor(Math.random() * 6) + 1;
     console.log(computer)



     if (giocatore > computer) {
         const risultato = document.createElement("div");
         risultato.innerHTML = `
              <h3> Hai vinto tu </h3>
             `;
         div.append("computer:", computer, risultato, "tu:", giocatore);
     } else if (giocatore < computer) {
         const risultato = document.createElement("div");
         risultato.innerHTML = `
              <h3> Ha vinto il computer </h3>
             `;
         div.append("computer:", computer, risultato, "tu:", giocatore);
     } else {
         const risultato = document.createElement("div");
         risultato.innerHTML = `
              <h3>Parità</h3>
             `;
         div.append("computer:", computer, risultato, "tu:", giocatore);
     }
 