let select = document.querySelector(".options");
let books = document.querySelectorAll(".single-book-img");

let items = Array.from(books);

select.addEventListener("change", () => {
    let value = select.value;

    if (value === "A-Z") {
        items.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
    }

    if (value === "Z-A") {
        items.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
    }

    if (value === "l-h") {
        items.sort((a, b) => Number(a.dataset.price.replace(/,/g, "")) - Number(b.dataset.price.replace(/,/g, "")));
    }

    if (value === "h-l") {
        items.sort((a, b) => Number(b.dataset.price.replace(/,/g, "")) - Number(a.dataset.price.replace(/,/g, "")));
    }

    if (value === "o-n") {
        items.sort((a, b) => new Date(a.dataset.date) - new Date(b.dataset.date));
    }

    if (value === "n-o") {
        items.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
    }

    if (value === "best-selling") {
        items.sort((a, b) => Number(b.dataset.sold) - Number(a.dataset.sold));
    }

    let container1 = document.querySelectorAll(".books")[0];
    let container2 = document.querySelectorAll(".books")[1];

    container1.innerHTML = "";
    container2.innerHTML = "";

    items.forEach((item, index) => {
        if (index < 4) {
            container1.appendChild(item);
        } else {
            container2.appendChild(item);
        }
    });
});

// ---------- SELECT ELEMENTS ----------
const cartBtn = document.getElementById("cart-btn");
const cartSidebar = document.getElementById("cartSidebar");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".single-book-img .add-to-cart-btn");

// ---------- LOAD CART ON PAGE OPEN ----------
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Update cart count
  cartCount.innerText = cart.length;
  cartCount.style.display = cart.length > 0 ? "inline-block" : "none";

  // Display items
  displayCart(cart);
}

// ---------- DISPLAY ITEMS IN SIDEBAR ----------
function displayCart(cart) {
  cartItemsContainer.innerHTML = "";

  if(cart.length === 0){
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const row = document.createElement("div");
    row.classList.add("cart-row");

    row.innerHTML = `
      <img src="${item.image}" class="cart-img" />
      <div class="cart-info">
        <p>${item.title}</p>
        <p>₹${item.price}</p>
      </div>
      <button class="cart-remove" data-index="${index}">✖</button>
    `;

    cartItemsContainer.appendChild(row);
  });

  // Add remove button listeners
  document.querySelectorAll(".cart-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      removeItem(index);
    });
  });
}

// ---------- REMOVE ITEM ----------
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// ---------- ADD ITEM TO CART ----------
addButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const parent = e.target.closest(".single-book-img");
    const item = {
      title: parent.dataset.name,
      price: parent.dataset.price,
      image: parent.querySelector("img").src
    };

    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${item.title} added to cart!`);
    loadCart();
  });
});

// ---------- TOGGLE CART SIDEBAR ----------
cartBtn.addEventListener("click", () => {
  cartSidebar.classList.toggle("active");
});

// ---------- INITIAL CALL ----------
loadCart();
