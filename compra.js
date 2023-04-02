let cartCount = 0;
const cartButton = document.getElementById('cart-button');
const cartCountElement = document.getElementById('cart-count');

function addToCart() {
  cartCount++;
  cartCountElement.innerText = cartCount;
}

cartButton.addEventListener('click', addToCart);