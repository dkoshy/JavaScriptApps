const inventory = {
  apple: { price: 12, qty: 0 },
  cherry: { price: 18, qty: 0 },
  strawberry: { price: 21, qty: 0 },
};

function sum() {
  let total = 0;
  const keys = Object.keys(inventory);
  keys.forEach(function (key) {
    total += inventory[key].price * inventory[key].qty;
  });
  return total;
}

function calculate(inputData) {
  let quantity = 0;
  if (inputData.value.length > 0) {
    quantity = parseInt(inputData.value);
  }
  inventory[inputData.id].qty = quantity;
  let total = sum();
  return `$${total}.00`;
}

window.addEventListener("DOMContentLoaded", () => {
  let totalContainer = document.getElementById("total-amount");
  let inputBoxes = document.querySelectorAll("#calculator input");
  inputBoxes.forEach((box) => {
    box.addEventListener("change", () => {
      totalContainer.textContent = calculate(box);
    });
    box.addEventListener("keyup", () => {
      totalContainer.textContent = calculate(box);
    });
  });
});
