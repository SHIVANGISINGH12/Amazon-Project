import { updateCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader(){
    let checkoutHeaderHTML = "";
    checkoutHeaderHTML = `
          Checkout (<a
            class="return-to-home-link "
            href="amazon.html"
          >${updateCartQuantity()}</a
          >)
        `;
    document.querySelector('.checkout-header-middle-section').innerHTML = checkoutHeaderHTML;
}