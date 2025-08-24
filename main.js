const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});
 // Museum database
const museums = [
    {
    name: "Château de Vaux-le-Vicomte",
    location: "France",
    image: "assets/tour1.jpg",
    link: "https://app.lapentor.com/sphere/museum-1-1755875614"
  },
  {
    name: "Natural History Museum",
    location: "London",
    image: "assets/museum5.jpeg",
    link: "https://app.lapentor.com/sphere/museum-2-1755875706"
  },
  {
    name: "Navo Theatre",
    location: "Dhaka",
    image: "assets/nt.jpeg",
    link: "https://app.lapentor.com/sphere/museum-3"
  },
  {
    name: "Bangladesh Military Museum",
    location: "Dhaka",
    image: "assets/military.jpg",
    link: "https://app.lapentor.com/sphere/museum-4-1755875797"
  }
];

const searchForm = document.getElementById("searchForm");
const searchResult = document.getElementById("searchResult");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop reload

  const name = document.getElementById("museumName").value.trim().toLowerCase();
  const location = document.getElementById("museumLocation").value.trim().toLowerCase();

  const found = museums.find(m =>
    m.name.toLowerCase().includes(name) &&
    m.location.toLowerCase().includes(location)
  );

  if (found) {
    searchResult.classList.remove("hidden");
    searchResult.innerHTML = `
      <div class="search-card">
        <img src="${found.image}" alt="${found.name}" />
        <h3>${found.name} - ${found.location}</h3>
        <a href="${found.link}" target="_blank" class="btn">Enter Tour</a>
      </div>
    `;
  } else {
    searchResult.classList.remove("hidden");
    searchResult.innerHTML = `<p style="color:red; text-align:center;">❌ No museum found</p>`;
  }
});


ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Modal functionality
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

document.getElementById("openLogin").addEventListener("click", () => {
  loginModal.style.display = "flex";
});

document.getElementById("openSignup").addEventListener("click", () => {
  signupModal.style.display = "flex";
});

document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const modalId = e.target.getAttribute("data-close");
    document.getElementById(modalId).style.display = "none";
  });
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
// Handle Login form
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.getElementById("loginMessage");
  message.textContent = "✅ Login successful!";
  message.className = "form-message success";

  // Auto close modal after 2 sec
  setTimeout(() => {
    document.getElementById("loginModal").style.display = "none";
    message.textContent = ""; // reset message
  }, 2000);
});

// Handle Signup form
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.getElementById("signupMessage");
  message.textContent = "🎉 Welcome to Museo360!";
  message.className = "form-message success";

  // Auto close modal after 2 sec
  setTimeout(() => {
    document.getElementById("signupModal").style.display = "none";
    message.textContent = ""; // reset message
  }, 2000);
});
const openBtn = document.getElementById('openVideo');
const modal = document.getElementById('videoModal');
const content = modal.querySelector('.modal__content');
const closeBtn = modal.querySelector('.close');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  // Center the content
  content.style.position = 'fixed';
  content.style.top = '50%';
  content.style.left = '50%';
  content.style.transform = 'translate(-50%, -50%)';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});

