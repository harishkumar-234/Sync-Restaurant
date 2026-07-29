/* ==========================================================================
   SYNC RESTAURANT - MAIN SCRIPT
   Handles Preloader, Cursor, Navigation, 24 Dishes Data & Filtering,
   Cart State, Lightbox Gallery & Form Validations
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. 24 Curated Dishes Data
// --------------------------------------------------------------------------
const dishesData = [
  // Starters
  {
    id: 'starter-1',
    name: 'Chicken Lollipop',
    category: 'starters',
    price: 14.50,
    rating: 4.9,
    desc: 'Crispy fried frenched chicken wings tossed in rich, fiery Indo-Chinese red chili sauce.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'starter-2',
    name: 'Veg Spring Roll',
    category: 'starters',
    price: 11.00,
    rating: 4.7,
    desc: 'Golden-fried thin pastry rolls stuffed with finely shredded seasoned Asian vegetables.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'starter-3',
    name: 'Paneer Tikka',
    category: 'starters',
    price: 13.50,
    rating: 4.8,
    desc: 'Charcoal-grilled cottage cheese cubes marinated in aromatic spices and thick yogurt.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'starter-4',
    name: 'Garlic Bread',
    category: 'starters',
    price: 8.50,
    rating: 4.6,
    desc: 'Artisanal sourdough toasted with roasted garlic butter, fresh parsley, and melted mozzarella.',
    image: 'https://images.unsplash.com/photo-1573140247614-6ce11b848dd2?auto=format&fit=crop&w=600&q=80'
  },

  // South Indian
  {
    id: 'south-1',
    name: 'Masala Dosa',
    category: 'south-indian',
    price: 12.00,
    rating: 4.9,
    desc: 'Ultra-thin crispy fermented rice crepe folded over spiced potato filling, served with chutneys.',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'south-2',
    name: 'Idli',
    category: 'south-indian',
    price: 8.00,
    rating: 4.7,
    desc: 'Steamed pillowy rice cakes served with hot lentil sambar and trio of fresh coconut chutneys.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'south-3',
    name: 'Vada',
    category: 'south-indian',
    price: 9.00,
    rating: 4.8,
    desc: 'Crispy golden fried lentil donuts seasoned with black pepper, curry leaves, and cumin.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'south-4',
    name: 'Pongal',
    category: 'south-indian',
    price: 10.50,
    rating: 4.6,
    desc: 'Comforting rice and yellow moong mash tempered with clarified butter, cashews, and pepper.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
  },

  // North Indian
  {
    id: 'north-1',
    name: 'Butter Chicken',
    category: 'north-indian',
    price: 18.00,
    rating: 5.0,
    desc: 'Tender tandoori chicken simmered in a velvety tomato, butter, and cashew nut cream gravy.',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'north-2',
    name: 'Paneer Butter Masala',
    category: 'north-indian',
    price: 16.50,
    rating: 4.8,
    desc: 'Succulent cottage cheese cubes cooked in rich spiced tomato butter gravy with fenugreek.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'north-3',
    name: 'Naan',
    category: 'north-indian',
    price: 4.50,
    rating: 4.7,
    desc: 'Traditional clay-oven baked flatbread brushed with organic ghee or roasted garlic butter.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'north-4',
    name: 'Biryani',
    category: 'north-indian',
    price: 19.50,
    rating: 4.9,
    desc: 'Slow-cooked Dum Basmati rice layered with tender meat, saffron, mint, and secret spices.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
  },

  // Chinese
  {
    id: 'chinese-1',
    name: 'Fried Rice',
    category: 'chinese',
    price: 13.00,
    rating: 4.7,
    desc: 'High-wok tossed jasmine rice with crisp vegetables, scrambled eggs, and soy sauce.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chinese-2',
    name: 'Noodles',
    category: 'chinese',
    price: 13.50,
    rating: 4.8,
    desc: 'Hakka style stir-fried wheat noodles tossed with scallions, bell peppers, and chili paste.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chinese-3',
    name: 'Manchurian',
    category: 'chinese',
    price: 14.00,
    rating: 4.7,
    desc: 'Crispy vegetable dumplings smothered in garlic-infused dark soy Manchurian gravy.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chinese-4',
    name: 'Dragon Chicken',
    category: 'chinese',
    price: 15.50,
    rating: 4.9,
    desc: 'Strips of crispy chicken tossed with cashews, red chilis, and sweet spicy glaze.',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80'
  },

  // Pizza & Burger
  {
    id: 'fast-1',
    name: 'Margherita Pizza',
    category: 'pizza-burger',
    price: 16.00,
    rating: 4.8,
    desc: 'Neapolitan stone-baked crust topped with San Marzano tomatoes, fresh mozzarella & basil.',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fast-2',
    name: 'Chicken Pizza',
    category: 'pizza-burger',
    price: 18.50,
    rating: 4.9,
    desc: 'Smoky grilled chicken, caramelized onions, BBQ drizzle, and three-cheese blend.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fast-3',
    name: 'Classic Burger',
    category: 'pizza-burger',
    price: 14.00,
    rating: 4.7,
    desc: 'Angus beef patty with brioche bun, crisp lettuce, tomato, pickles, and signature house sauce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fast-4',
    name: 'Cheese Burger',
    category: 'pizza-burger',
    price: 15.50,
    rating: 4.8,
    desc: 'Double melt cheddar cheese over prime patty, crispy onion rings, and smoked bacon jam.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Gulab Jamun',
    category: 'desserts',
    price: 7.50,
    rating: 4.9,
    desc: 'Warm milk-solid dumplings soaked in rose water and cardamom scented sugar syrup.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dessert-2',
    name: 'Ice Cream',
    category: 'desserts',
    price: 6.50,
    rating: 4.7,
    desc: 'Handcrafted Madagascar vanilla bean and Belgian chocolate artisanal gelato scoops.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dessert-3',
    name: 'Brownie',
    category: 'desserts',
    price: 9.00,
    rating: 4.9,
    desc: 'Decadent fudgy dark chocolate brownie served hot with a scoop of vanilla bean ice cream.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dessert-4',
    name: 'Chocolate Cake',
    category: 'desserts',
    price: 9.50,
    rating: 5.0,
    desc: 'Rich 70% Valrhona dark chocolate layered ganache cake topped with edible 24k gold leaf.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'
  }
];

// Fallback dish image
const FALLBACK_DISH_IMG = 'images/dishes/fallback.png';

// Shopping Cart State
let cart = [];
let favoriteItems = new Set();

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     2. Preloader Animation
     ------------------------------------------------------------------------ */
  const preloader = document.getElementById('preloader');
  const loaderBar = document.getElementById('loader-bar');
  const loaderPercentage = document.getElementById('loader-percentage');

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      if (loaderBar) loaderBar.style.width = '100%';
      if (loaderPercentage) loaderPercentage.textContent = '100%';
      
      setTimeout(() => {
        if (preloader) preloader.classList.add('loaded');
      }, 300);
    } else {
      if (loaderBar) loaderBar.style.width = `${progress}%`;
      if (loaderPercentage) loaderPercentage.textContent = `${progress}%`;
    }
  }, 60);

  /* ------------------------------------------------------------------------
     3. Custom Glowing Cursor Follower
     ------------------------------------------------------------------------ */
  const cursorGlow = document.querySelector('.cursor-glow');
  const cursorDot = document.querySelector('.cursor-dot');

  if (cursorGlow && cursorDot && window.innerWidth > 768) {
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;

      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;

      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  }

  /* ------------------------------------------------------------------------
     4. Scroll Progress Indicator & Sticky Navigation
     ------------------------------------------------------------------------ */
  const progressBar = document.getElementById('scroll-progress');
  const navbarHeader = document.querySelector('.navbar-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    // Scroll progress bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';

    // Sticky header background
    if (winScroll > 60) {
      navbarHeader?.classList.add('scrolled');
      backToTopBtn?.classList.add('visible');
    } else {
      navbarHeader?.classList.remove('scrolled');
      backToTopBtn?.classList.remove('visible');
    }

    // Active Nav link based on current section viewport
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (winScroll >= sectionTop && winScroll < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Back to Top button click
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ------------------------------------------------------------------------
     5. Mobile Menu Toggle
     ------------------------------------------------------------------------ */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu?.classList.toggle('open');
  });

  // Close mobile menu on clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      navMenu?.classList.remove('open');
    });
  });

  /* ------------------------------------------------------------------------
     6. Dynamic Menu Dishes Rendering & Filtering
     ------------------------------------------------------------------------ */
  const dishesGrid = document.getElementById('dishes-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('menu-search');

  function renderDishes(dishes) {
    if (!dishesGrid) return;
    
    if (dishes.length === 0) {
      dishesGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 50px 0;">
          <i class="fa-solid fa-utensils" style="font-size: 3rem; margin-bottom: 15px; color: var(--color-gold-primary);"></i>
          <h3>No dishes found matching your selection</h3>
        </div>`;
      return;
    }

    // Explicitly add 'revealed' class to ensure cards are instantly visible without waiting for observer
    dishesGrid.innerHTML = dishes.map(dish => `
      <div class="dish-card glass-card revealed" data-id="${dish.id}">
        <div class="dish-img-wrapper">
          <img src="${dish.image}" alt="${dish.name}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_DISH_IMG}';">
          <button class="dish-fav-btn ${favoriteItems.has(dish.id) ? 'active' : ''}" data-id="${dish.id}">
            <i class="${favoriteItems.has(dish.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
          <span class="dish-category-tag">${dish.category.replace('-', ' ')}</span>
        </div>
        <div class="dish-info">
          <div class="dish-header">
            <h3 class="dish-title">${dish.name}</h3>
            <span class="dish-price">$${dish.price.toFixed(2)}</span>
          </div>
          <div class="dish-rating">
            <i class="fa-solid fa-star"></i>
            <span>${dish.rating} (120+ reviews)</span>
          </div>
          <p class="dish-desc">${dish.desc}</p>
          <div class="dish-footer">
            <button class="btn-add-cart" data-id="${dish.id}">
              <i class="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `).join('');

    attachDishEvents();
  }

  function attachDishEvents() {
    // Add to Cart Buttons
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dishId = e.currentTarget.getAttribute('data-id');
        addToCart(dishId);
      });
    });

    // Favorite Buttons
    document.querySelectorAll('.dish-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dishId = e.currentTarget.getAttribute('data-id');
        if (favoriteItems.has(dishId)) {
          favoriteItems.delete(dishId);
          e.currentTarget.classList.remove('active');
          e.currentTarget.querySelector('i').className = 'fa-regular fa-heart';
        } else {
          favoriteItems.add(dishId);
          e.currentTarget.classList.add('active');
          e.currentTarget.querySelector('i').className = 'fa-solid fa-heart';
        }
      });
    });
  }

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      let filteredDishes = dishesData;
      
      if (filter !== 'all') {
        filteredDishes = dishesData.filter(d => d.category === filter);
      }
      
      if (searchInput && searchInput.value.trim() !== '') {
        const query = searchInput.value.toLowerCase();
        filteredDishes = filteredDishes.filter(d => d.name.toLowerCase().includes(query) || d.desc.toLowerCase().includes(query));
      }
      
      renderDishes(filteredDishes);
    });
  });

  // Search Input Handler
  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
    
    let filteredDishes = dishesData;
    if (activeFilter !== 'all') {
      filteredDishes = dishesData.filter(d => d.category === activeFilter);
    }
    
    filteredDishes = filteredDishes.filter(d => d.name.toLowerCase().includes(query) || d.desc.toLowerCase().includes(query));
    renderDishes(filteredDishes);
  });

  // Initial Menu Render
  renderDishes(dishesData);

  /* ------------------------------------------------------------------------
     7. Shopping Cart Offcanvas Logic
     ------------------------------------------------------------------------ */
  const cartDrawer = document.getElementById('cart-drawer');
  const cartIconBtn = document.getElementById('cart-icon-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartBody = document.getElementById('cart-body');
  const cartCountBadge = document.getElementById('cart-count');
  const cartTotalPrice = document.getElementById('cart-total-price');

  function addToCart(dishId) {
    const dish = dishesData.find(d => d.id === dishId);
    if (!dish) return;

    const existingItem = cart.find(item => item.id === dishId);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ ...dish, qty: 1 });
    }

    updateCartUI();
    openCartDrawer();
  }

  function removeFromCart(dishId) {
    cart = cart.filter(item => item.id !== dishId);
    updateCartUI();
  }

  function updateCartUI() {
    // Update badge
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCountBadge) cartCountBadge.textContent = totalQty;

    // Update body
    if (!cartBody) return;
    if (cart.length === 0) {
      cartBody.innerHTML = `<div class="cart-empty-text">Your cart is empty</div>`;
      if (cartTotalPrice) cartTotalPrice.textContent = '$0.00';
      return;
    }

    let subtotal = 0;
    cartBody.innerHTML = cart.map(item => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.qty}</div>
          </div>
          <i class="fa-solid fa-trash-can cart-item-remove" onclick="removeFromCart('${item.id}')"></i>
        </div>
      `;
    }).join('');

    if (cartTotalPrice) cartTotalPrice.textContent = `$${subtotal.toFixed(2)}`;
  }

  window.removeFromCart = removeFromCart;

  function openCartDrawer() {
    cartDrawer?.classList.add('open');
  }

  function closeCartDrawer() {
    cartDrawer?.classList.remove('open');
  }

  cartIconBtn?.addEventListener('click', openCartDrawer);
  cartCloseBtn?.addEventListener('click', closeCartDrawer);

  /* ------------------------------------------------------------------------
     8. Lightbox Gallery Logic
     ------------------------------------------------------------------------ */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentGalleryIndex = 0;
  const galleryList = Array.from(galleryItems).map(item => ({
    src: item.querySelector('img').getAttribute('src'),
    title: item.getAttribute('data-title') || 'SYNC Fine Dining'
  }));

  function openLightbox(index) {
    currentGalleryIndex = index;
    if (lightboxImg) lightboxImg.src = galleryList[index].src;
    if (lightboxCaption) lightboxCaption.textContent = galleryList[index].title;
    lightboxModal?.classList.add('active');
  }

  function closeLightbox() {
    lightboxModal?.classList.remove('active');
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  
  lightboxPrev?.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryList.length) % galleryList.length;
    openLightbox(currentGalleryIndex);
  });

  lightboxNext?.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryList.length;
    openLightbox(currentGalleryIndex);
  });

  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  /* ------------------------------------------------------------------------
     9. Table Reservation & Newsletter Form Validations
     ------------------------------------------------------------------------ */
  const reservationForm = document.getElementById('reservation-form');
  reservationForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('res-name').value.trim();
    const phone = document.getElementById('res-phone').value.trim();
    const email = document.getElementById('res-email').value.trim();
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;

    if (!name || !phone || !email || !date || !time || !guests) {
      alert('Please fill in all required fields to reserve your table.');
      return;
    }

    // Success Modal Feedback
    alert(`Thank you, ${name}! Your table reservation request for ${guests} guest(s) on ${date} at ${time} has been received. We will confirm your booking via phone (${phone}) shortly.`);
    reservationForm.reset();
  });

  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value.trim();
    if (email) {
      alert('Thank you for subscribing to SYNC Luxury Dining updates & exclusive invitations!');
      newsletterForm.reset();
    }
  });
});
