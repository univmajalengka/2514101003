document.addEventListener("DOMContentLoaded", () => {
  // Data menu ditulis di satu tempat agar mudah diperbarui.
  const menuItems = [
    // Signature
    { id: 1, name: "Kopi Susu Dipi", category: "Signature", price: 17000, description: "Secret syrup, magic milk, espresso." },
    { id: 2, name: "Sweet Blackberry", category: "Signature", price: 25000, description: "Strawberry, mix syrup, espresso." },

    // Non Coffee
    { id: 3, name: "Chocolate", category: "Non Coffee", price: 20000, description: "Chocolate, magic milk, velvety." },
    { id: 4, name: "Matcha", category: "Non Coffee", price: 20000, description: "Matcha, magic milk, umamy." },
    { id: 5, name: "Red Velvet", category: "Non Coffee", price: 20000, description: "Velvety, creamy, magic milk." },
    { id: 6, name: "Basic Tea", category: "Non Coffee", price: 10000, description: "Ice & hot basic tea, add sugar." },
    { id: 7, name: "Lemon Tea", category: "Non Coffee", price: 15000, description: "Lemon fresh with tea & slice." },
    { id: 8, name: "Lychee Tea", category: "Non Coffee", price: 15000, description: "Lychee fruit with tea & syrup." },
    { id: 9, name: "Creamy Regal", category: "Non Coffee", price: 20000, description: "Vanilla Creamy Milk & biscuit." },

    // Coffee
    { id: 10, name: "Americano", category: "Coffee", price: 15000, description: "Water & single espresso." },
    { id: 11, name: "Kopi Susu Aren", category: "Coffee", price: 17000, description: "Aren, magic milk, espresso." },
    { id: 12, name: "Romano", category: "Coffee", price: 25000, description: "Lemon juice & espresso." },
    { id: 13, name: "Caramel Macchiato", category: "Coffee", price: 25000, description: "Creamy texture, salty & espresso." },
    { id: 14, name: "Bon-bon", category: "Coffee", price: 15000, description: "Condensed milk & double shot." },
    { id: 15, name: "Cappuccino", category: "Coffee", price: 20000, description: "Foamy milk & espresso." },
    { id: 16, name: "Latte", category: "Coffee", price: 20000, description: "Texture milk & espresso." },
    { id: 17, name: "Mochaccino", category: "Coffee", price: 25000, description: "Condensed milk, choco & shot." },
    { id: 18, name: "Filter Coffee", category: "Coffee", price: 25000, description: "V60 & japanese." },
    { id: 19, name: "Regal Latte", category: "Coffee", price: 25000, description: "Vanilla syrup, biscuit & shot." },
    { id: 20, name: "Caramel Latte", category: "Coffee", price: 25000, description: "Syrup, magic milk, espresso." },
    { id: 21, name: "Hazelnut Latte", category: "Coffee", price: 25000, description: "Syrup, magic milk, espresso." },
    { id: 22, name: "Vanilla Latte", category: "Coffee", price: 25000, description: "Syrup, magic milk, espresso." },

    // Milkshake
    { id: 23, name: "Caramel", category: "Milkshake", price: 15000 },
    { id: 24, name: "Hazelnut", category: "Milkshake", price: 15000 },
    { id: 25, name: "Strawberry", category: "Milkshake", price: 15000 },
    { id: 26, name: "Tiramisu", category: "Milkshake", price: 15000 },
    { id: 27, name: "Vanilla", category: "Milkshake", price: 15000 },

    // Snack Meal
    { id: 28, name: "Nugget", category: "Snack Meal", price: 18000 },
    { id: 29, name: "French Fries", category: "Snack Meal", price: 15000 },
    { id: 30, name: "Sausage", category: "Snack Meal", price: 15000 },
    { id: 31, name: "Mix Platter", category: "Snack Meal", price: 25000 },
    { id: 32, name: "Bakwan Jagung", category: "Snack Meal", price: 12000 },
    { id: 33, name: "Dimsum Original", category: "Snack Meal", price: 16000 },
    { id: 34, name: "Dimsum Mentai", category: "Snack Meal", price: 20000 },
    { id: 35, name: "Otak-otak", category: "Snack Meal", price: 15000 },
    { id: 36, name: "Risoles Ayam", category: "Snack Meal", price: 20000 },
    { id: 37, name: "Risoles Mayo", category: "Snack Meal", price: 20000 },
    { id: 38, name: "Cireng", category: "Snack Meal", price: 20000 },
    { id: 39, name: "Singkong Goreng Keju", category: "Snack Meal", price: 15000 },
    { id: 40, name: "Tahu Lada Garam", category: "Snack Meal", price: 15000 },
    { id: 41, name: "Pisang Goreng Ori", category: "Snack Meal", price: 15000 },
    { id: 42, name: "Pisang Keju Cokelat", category: "Snack Meal", price: 18000 },
    { id: 43, name: "Pisang Keju Cokelat Ice Cream", category: "Snack Meal", price: 25000 },

    // Main Course
    { id: 44, name: "Mie Goreng", category: "Main Course", price: 20000 },
    { id: 45, name: "Mie Rebus", category: "Main Course", price: 20000 },
    { id: 46, name: "Nasi Goreng Dipi", category: "Main Course", price: 25000 },
    { id: 47, name: "Nasi Goreng Kampung", category: "Main Course", price: 22000 },
    { id: 48, name: "Nasi Goreng Special", category: "Main Course", price: 25000 },

    // Breakfast
    { id: 49, name: "Bubur Ayam", category: "Breakfast", price: 10000 },
    { id: 50, name: "Bubur Sop Ayam", category: "Breakfast", price: 10000 },
    { id: 51, name: "Soto Ayam", category: "Breakfast", price: 10000 },
    { id: 52, name: "Lontong Sayur", category: "Breakfast", price: 10000 },
    { id: 53, name: "Nasi Kuning", category: "Breakfast", price: 8000 },
    { id: 54, name: "Nasi Uduk", category: "Breakfast", price: 8000 },
    { id: 55, name: "Ketoprak", category: "Breakfast", price: 10000 },
    { id: 56, name: "Nasi Rames", category: "Breakfast", price: 10000 },
    { id: 57, name: "Mie Rebus (porsi kecil)", category: "Breakfast", price: 15000 },
    { id: 58, name: "Mie Rebus (porsi besar)", category: "Breakfast", price: 25000 }
  ];

  const rupiah = value => new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", maximumFractionDigits: 0
  }).format(value);

  const menuGrid = document.getElementById("menuGrid");
  const filtersContainer = document.getElementById("categoryFilters");
  const searchInput = document.getElementById("menuSearch");
  const resultCount = document.getElementById("menuResultCount");
  const cartPanel = document.getElementById("cartPanel");
  const cartBackdrop = document.getElementById("cartBackdrop");
  const cartItemsContainer = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartDiscount = document.getElementById("cartDiscount");
  const cartTotal = document.getElementById("cartTotal");
  const discountNote = document.getElementById("discountNote");
  const simulateOrderButton = document.getElementById("simulateOrderButton");
  const clearCartButton = document.getElementById("clearCartButton");
  const toast = document.getElementById("toast");

  const categories = ["Semua", "Signature", "Non Coffee", "Coffee", "Milkshake", "Snack Meal", "Main Course", "Breakfast"];
  let activeCategory = "Semua";
  let cart = [];
  let toastTimer;

  function renderFilters() {
    filtersContainer.innerHTML = categories.map(category => `
      <button class="filter-button ${category === activeCategory ? "active" : ""}"
        type="button" data-category="${category}" aria-pressed="${category === activeCategory}">
        ${category}
      </button>
    `).join("");
  }

  function renderMenu() {
    const keyword = searchInput.value.trim().toLocaleLowerCase("id-ID");
    const filtered = menuItems.filter(item => {
      const matchesCategory = activeCategory === "Semua" || item.category === activeCategory;
      const matchesSearch = item.name.toLocaleLowerCase("id-ID").includes(keyword)
        || item.category.toLocaleLowerCase("id-ID").includes(keyword);
      return matchesCategory && matchesSearch;
    });

    resultCount.textContent = `${filtered.length} menu tersedia`;
    if (!filtered.length) {
      menuGrid.innerHTML = `<div class="no-results">Menu tidak ditemukan. Coba kata kunci lain.</div>`;
      return;
    }

    menuGrid.innerHTML = filtered.map(item => `
      <article class="menu-card">
        <div class="menu-card-info">
          <p class="menu-category">${item.category}</p>
          <h3>${item.name}</h3>
          ${item.description ? `<p class="menu-description">${item.description}</p>` : ""}
          <p class="menu-price">${rupiah(item.price)}</p>
        </div>
        <button class="add-button" type="button" data-add="${item.id}" aria-label="Tambah ${item.name} ke keranjang">+</button>
      </article>
    `).join("");
  }

  // Fungsi diskon sesuai ketentuan tugas.
  // Nilai yang dikembalikan adalah nominal diskon dalam Rupiah.
  function hitungDiskon(totalBelanja) {
    if (totalBelanja >= 100000) {
      return totalBelanja * 0.10;
    } else if (totalBelanja >= 50000) {
      return totalBelanja * 0.05;
    }
    return 0;
  }

  function getCartTotals() {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const diskon = hitungDiskon(subtotal);
    return { subtotal, diskon, totalBayar: subtotal - diskon };
  }

  function renderCart() {
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const { subtotal, diskon, totalBayar } = getCartTotals();
    cartCount.textContent = totalQuantity;
    cartSubtotal.textContent = rupiah(subtotal);
    cartDiscount.textContent = `− ${rupiah(diskon)}`;
    cartTotal.textContent = rupiah(totalBayar);
    simulateOrderButton.disabled = cart.length === 0;
    clearCartButton.disabled = cart.length === 0;

    if (!cart.length) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart">
          <span>🛍️</span><h3>Keranjang masih kosong</h3>
          <p>Yuk, pilih menu favoritmu dulu.</p>
        </div>`;
      discountNote.textContent = "Belanja minimal Rp50.000 untuk mendapatkan diskon 5%.";
      return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <small>${rupiah(item.price)} / item · ${rupiah(item.price * item.quantity)}</small>
        </div>
        <div class="quantity-control" aria-label="Jumlah ${item.name}">
          <button type="button" data-decrease="${item.id}" aria-label="Kurangi ${item.name}">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-increase="${item.id}" aria-label="Tambah ${item.name}">+</button>
        </div>
        <button type="button" class="remove-item" data-remove="${item.id}" aria-label="Hapus ${item.name}">×</button>
      </div>
    `).join("");

    if (subtotal >= 100000) {
      discountNote.textContent = "Mantap! Kamu mendapatkan diskon 10% karena subtotal mencapai Rp100.000.";
    } else if (subtotal >= 50000) {
      const remaining = 100000 - subtotal;
      discountNote.textContent = `Kamu mendapatkan diskon 5%. Tambah ${rupiah(remaining)} lagi untuk mencapai diskon 10%.`;
    } else {
      discountNote.textContent = `Tambah ${rupiah(50000 - subtotal)} lagi untuk mendapatkan diskon 5%.`;
    }
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
  }

  function addToCart(id) {
    const product = menuItems.find(item => item.id === id);
    if (!product) return;
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    renderCart();
    showToast(`${product.name} ditambahkan ke keranjang`);
  }

  function changeQuantity(id, amount) {
    const item = cart.find(product => product.id === id);
    if (!item) return;
    item.quantity += amount;
    if (item.quantity <= 0) cart = cart.filter(product => product.id !== id);
    renderCart();
  }

  function openCart() {
    document.body.classList.add("cart-open");
    cartPanel.setAttribute("aria-hidden", "false");
    document.getElementById("closeCartButton").focus();
  }

  function closeCart() {
    document.body.classList.remove("cart-open");
    cartPanel.setAttribute("aria-hidden", "true");
  }

  filtersContainer.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderFilters();
    renderMenu();
  });

  menuGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(Number(button.dataset.add));
  });

  cartItemsContainer.addEventListener("click", event => {
    const decrease = event.target.closest("[data-decrease]");
    const increase = event.target.closest("[data-increase]");
    const remove = event.target.closest("[data-remove]");
    if (decrease) changeQuantity(Number(decrease.dataset.decrease), -1);
    if (increase) changeQuantity(Number(increase.dataset.increase), 1);
    if (remove) {
      const id = Number(remove.dataset.remove);
      cart = cart.filter(item => item.id !== id);
      renderCart();
    }
  });

  searchInput.addEventListener("input", renderMenu);
  document.getElementById("openCartButton").addEventListener("click", openCart);
  document.getElementById("openCartFromHint").addEventListener("click", openCart);
  document.getElementById("closeCartButton").addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeCart();
  });

  clearCartButton.addEventListener("click", () => {
    cart = [];
    renderCart();
    showToast("Keranjang berhasil dikosongkan");
  });

  simulateOrderButton.addEventListener("click", () => {
    if (!cart.length) return;
    const { subtotal, diskon, totalBayar } = getCartTotals();
    const detail = cart.map(item => `${item.name} x${item.quantity}`).join(", ");
    showToast(`Simulasi pesanan berhasil · Total ${rupiah(totalBayar)}`);
    console.info("Ringkasan simulasi pesanan:", {
      items: detail, subtotal: rupiah(subtotal),
      diskon: rupiah(diskon), totalBayar: rupiah(totalBayar)
    });
  });

  // Navigasi mobile.
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup navigasi" : "Buka navigasi");
  });
  navLinks.addEventListener("click", event => {
    if (event.target.closest("a")) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  renderFilters();
  renderMenu();
  renderCart();
  console.log(`Website DIPI CAFE siap! ${menuItems.length} menu berhasil dimuat.`);
});
