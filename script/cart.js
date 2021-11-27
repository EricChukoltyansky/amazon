let btnAdd = document.querySelector(".btn-function-cart-add");
let btnDec = document.querySelector(".btn-function-cart-dec");
let zero = document.querySelector(".zero");

const increment = () => {
  zero.textContent++;
};
const decrement = () => {
  +zero.textContent === 0 ? (zero.textContent = 0) : zero.textContent--;
};

btnAdd.addEventListener("click", increment);

btnDec.addEventListener("click", decrement);

console.log("hello")
