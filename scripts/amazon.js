import { cart, addToCart } from "../data/cart.js";
import { products, loadProducts } from "../data/products.js";
import { updateCartQuantity } from "../data/cart.js";
import { formatCurrency } from "./utils/money.js";

loadProducts(renderProductsGrid);

document.querySelector(".js-cart-quantity").innerHTML = updateCartQuantity();

function renderProductsGrid() {
  let productsHTML = "";

  products.forEach((product) => {
    productsHTML += `<div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
          </div>
   
          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
              <img
              class="product-rating-stars"
              src="${product.getStarsUrl()}"
            />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">${product.getPrice()}</div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          ${product.extraInfoHTML()}
          
          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
            product.id
          }">Add to Cart</button>

        </div>`;
  });

  const url = import.meta.url;
  const fileName = url.substring(url.lastIndexOf("/") + 1);
  console.log("Current script file name:", fileName);

  document.querySelector(".js-products-grid").innerHTML = productsHTML;

  function displayButtonMessage(productId) {
    let timeoutId;
    let buttonMessage = document.querySelector(
      `.js-added-to-cart-${productId}`
    );

    buttonMessage.classList.add("buttonMessage");

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      buttonMessage.classList.remove("buttonMessage");
    }, 4000);
  }

  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const { productId } = button.dataset;

      addToCart(productId);
      document.querySelector(".js-cart-quantity").innerHTML =
        updateCartQuantity();
      displayButtonMessage(productId);
    });
  });
}
