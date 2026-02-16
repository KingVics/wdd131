let cart = JSON.parse(localStorage.getItem('localEatsCart')) || [];

function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) cartCount.innerText = cart.length;
}

// Initialize
updateCartUI();

function toggleCart() {
  const modal = document.getElementById('cartModal');

  if (!modal) return;

  modal.classList.toggle('is-visible');

  if (modal.classList.contains('is-visible')) {
    renderCartItems();
  }
}

// Close button for Cart
document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.getElementById('cartShow');
  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleCart();
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.getElementById('cartShow');
  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleCart();
    });
  }

  window.onclick = function (event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});

// Function to render items inside the modal
function renderCartItems() {
  const listContainer = document.getElementById('cartItemsList');
  const totalDisplay = document.getElementById('cartTotalAmount');

  if (cart.length === 0) {
    listContainer.innerHTML = "<p class='empty-msg'>Your cart is empty.</p>";
    totalDisplay.innerText = '$0.00';
    return;
  }

  let total = 0;
  listContainer.innerHTML = cart
    .map((item, index) => {
      total += item.price;
      return `
      <div class="cart-item-row">
        <span>${item.name}</span>
        <div class="cart-item-controls">
          <strong>$${item.price.toFixed(2)}</strong>
          <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
        </div>
      </div>
    `;
    })
    .join('');

  totalDisplay.innerText = `$${total.toFixed(2)}`;
}

// remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1); 
  localStorage.setItem('localEatsCart', JSON.stringify(cart));
  updateCartUI();
  renderCartItems();
}

function checkout() {
  alert('Thank you for your order! Your food is on the way.');
  cart = [];
  localStorage.removeItem('localEatsCart');
  updateCartUI();
  toggleCart();
}

// triggers cart modal
document.querySelector('.cart-icon').addEventListener('click', (e) => {
  e.preventDefault();
  toggleCart();
});

const menuElement = document.querySelector('#menu');

const navigation = document.querySelector('#header-navigation');

menuElement.addEventListener('click', (e) => {
  e.preventDefault();
  navigation.classList.toggle('show');
  menuElement.classList.toggle('show');
});
