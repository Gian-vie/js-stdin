let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelector(".box");
let button = document.querySelector("#button-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//adicionar o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
  //quando clica na caixa
  boxes[i].addEventListener("click", function() {
    let el
    if (player1 == player2) {
      //x
      el = x;
    } else {
      el = o;
    }
    let cloneEl = el.cloneNode(true);
    this.appendChild(cloneEl);
  });
}
//não finalizado - aula 314