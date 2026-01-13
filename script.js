/*
 * ============================================
 * STUDENT INSTRUCTIONS - QuerySelector Lesson
 * ============================================
 *
 * Your task: Fix the bugs and implement the shopping cart functionality!
 *
 * BUGS TO FIX:
 * 1. Line 3: The variable is named "appleButton" but it's selecting "#banana" - fix this!
 * 2. Line 7: The function is named "addApple" but should handle all items - rename it!
 *
 * TODO - Implement the following features:
 * 1. Select all three buttons (apple, banana, mango) using querySelector
 * 2. Create a function that adds items to the shopping cart when clicked
 * 3. Display the item name and price in the #shopping-cart div
 * 4. Calculate and update the total price in the #total-span element
 * 5. Store prices: Apple = $0.75, Banana = $0.30, Mango = $1.25
 *
 * HINTS:
 * - Use querySelector or querySelectorAll to select elements
 * - Use addEventListener to handle click events
 * - Use textContent or innerHTML to update the DOM
 * - You may need to parse prices from strings or store them in variables
 *
 * ============================================
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("script running");

  let totalInCent = 0;

  const appleButton = document.querySelector("#apple");
  const bananaButton = document.querySelector("#banana");
  const mangoButton = document.querySelector("#mango");
  const shoppingCart = document.querySelector("#shopping-cart");
  const totalSpan = document.querySelector("#total-span");

  console.log(appleButton, bananaButton, mangoButton);

  const updateTotal = () => {
    totalSpan.textContent = (totalInCent / 100).toFixed(2);
  };

  const addItem = (name, price) => {
    shoppingCart.innerHTML += `<p>${name}: $${(price / 100).toFixed(2)}</p>`;
    totalInCent += price;
    updateTotal();
  };

  appleButton.addEventListener("click", () => addItem("Apple", 75));
  bananaButton.addEventListener("click", () => addItem("Banana", 30));
  mangoButton.addEventListener("click", () => addItem("Mango", 125));
});