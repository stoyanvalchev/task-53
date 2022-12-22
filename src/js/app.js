import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let priceValue = document.querySelector(".price").textContent;
  let product = document.querySelector(".product");
  product.setAttribute("data-price", priceValue);
});
