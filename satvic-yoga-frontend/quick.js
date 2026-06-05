const qtyInput = document.getElementById('qty');
    document.getElementById('increase').onclick = () => qtyInput.value = +qtyInput.value + 1;
    document.getElementById('decrease').onclick = () => {
      if (qtyInput.value > 1) qtyInput.value = +qtyInput.value - 1;
    };

    let buttons = document.querySelectorAll(".edition-buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addToCartBtn");
  const cartCount = document.getElementById("cart-count");

  if (!addBtn) {
    console.error("Add-to-cart button not found!");
    return;
  }

  // Update cart count
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.innerText = cart.length;
    cartCount.style.display = cart.length > 0 ? "inline-block" : "none";
  }

  // Add to cart click
  addBtn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = {
      title: document.querySelector(".product-details h2").innerText.trim(),
      price: document.querySelector(".price span").innerText.replace("₹", "").trim(),
      image: document.querySelector(".product-image img").src
    };

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!"); // ✅ This should now work
    updateCartCount();
  });

  // Run once on page load
  updateCartCount();
});
