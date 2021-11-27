let btnAdd = document.querySelector(".btn-function-cart-add");
let btnDec = document.querySelector(".btn-function-cart-dec");
let zero = document.querySelectorAll(".zero");

const increment = () => {
  zero[1].textContent++;
};
const decrement = () => {
  +zero[1].textContent === 0 ? (zero[1].textContent = 0) : zero[1].textContent--;
};

btnAdd.addEventListener("click", increment);

btnDec.addEventListener("click", decrement);

console.log("hello")
