import "bootstrap";
import "./style.css";

const BTN_REFRESH = document.querySelector("#btn-refresh");
const NUMBER = document.querySelector("#cardContent");
const DIV_CARD = document.querySelector("#card");
const SUITS = ['heart', 'club', 'diamond', 'spade'];
const POKER_NUMBERS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

//LOGICA CARGAR CARTAS AL CLICKAR

BTN_REFRESH.addEventListener('click', () => {

  NUMBER.innerHTML = POKER_NUMBERS[randomIndex(POKER_NUMBERS)];
  DIV_CARD.className = "card";
  DIV_CARD.classList.add(SUITS[randomIndex(SUITS)]);

})

//LOGICA CARGAR CARTAS CADA 10 SEGUNDOS

setInterval(()=>{
  NUMBER.innerHTML = POKER_NUMBERS[randomIndex(POKER_NUMBERS)];
  DIV_CARD.className = "card";
  DIV_CARD.classList.add(SUITS[randomIndex(SUITS)]);
}, 10000)

const randomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
}