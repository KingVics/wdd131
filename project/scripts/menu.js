// The Menu Data Array
const products = [
  {
    id: 1,
    name: 'Classic Cheeseburger',
    category: 'Burgers',
    price: 12.99,
    desc: 'Juicy beef patty and secret sauce.',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
  },
  {
    id: 2,
    name: 'Pepperoni Feast',
    category: 'Pizza',
    price: 15.5,
    desc: 'Hand-tossed dough with premium pepperoni.',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
  },
  {
    id: 3,
    name: 'Crispy Chicken Wings',
    category: 'Sides',
    price: 10.0,
    desc: '6 pieces with buffalo or BBQ sauce.',
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500',
  },
  {
    id: 4,
    name: 'Truffle Fries',
    category: 'Sides',
    price: 6.5,
    desc: 'Golden fries with truffle oil and parm.',
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500',
  },
  {
    id: 5,
    name: 'BBQ Bacon Burger',
    category: 'Burgers',
    price: 14.99,
    desc: 'Double bacon and smoky BBQ sauce.',
    img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500',
  },
];

// Function to Render Menu
function renderMenu(filter = 'All') {
  const menuGrid = document.querySelector('.menu-grid');

  if (!menuGrid) return;
  menuGrid.innerHTML = '';

  const filteredProducts =
    filter === 'All' ? products : products.filter((p) => p.category === filter);

  filteredProducts.forEach((product) => {
    menuGrid.innerHTML += `
      <div class="menu-item">
        <div class="menu-img-container">
          <img src="${product.img}" alt="${product.name}" lazyload="lazy">
          <span class="price-tag">$${product.price.toFixed(2)}</span>
        </div>
        <div class="menu-info">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <button class="btn-add" onclick="addToCart(${product.id})">Add to Order</button>
        </div>
      </div>
    `;
  });
  updateCartUI();
}

// function to add menu to count
let count = 0;
document.querySelectorAll('.btn-add').forEach((button) => {
  button.addEventListener('click', () => {
    count++;
    document.getElementById('cart-count').innerText = count;

    button.innerText = 'Added!';
    button.style.background = '#4CAF50';
    setTimeout(() => {
      button.innerText = 'Add to Order';
      button.style.background = '#f5f5f5';
    }, 1000);
  });
});


// Filter Logic
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    e.target.classList.add('active');
    renderMenu(e.target.innerText);
  });
});

// Cart Logic & LocalStorage Persistence
function addToCart(productId) {
  const item = products.find((p) => p.id === productId);
  cart.push(item);
  localStorage.setItem('localEatsCart', JSON.stringify(cart));
  updateCartUI();
}

// Initialize
updateCartUI();
renderMenu();
