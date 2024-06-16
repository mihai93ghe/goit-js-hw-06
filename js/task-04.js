let counterValue = 0;

const valueSpan = document.getElementById("value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

function updateValue() {
  valueSpan.textContent = counterValue;
}

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});
