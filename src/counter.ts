let counter = 0;

const counterValue = document.getElementById("counter-value") as HTMLParagraphElement;
const incrementBtn = document.getElementById("increment") as HTMLButtonElement;
const decrementBtn = document.getElementById("decrement") as HTMLButtonElement;

const updateCounter = () => {
  counterValue.textContent = counter.toString();
};

incrementBtn.addEventListener("click", () => {
  counter++;
  updateCounter();
});

decrementBtn.addEventListener("click", () => {
  counter--;
  updateCounter();
});

export { updateCounter };
