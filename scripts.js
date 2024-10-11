// FAQ Accordion Functionality
document.querySelectorAll('.faq-accordion input.tgg-title').forEach(item => {
    item.addEventListener('change', function () {
      // Close other FAQ accordions
      document.querySelectorAll('.faq-accordion input.tgg-title').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.checked = false; // Collapse others
        }
      });
    });
  });
  
  // Particles.js Configuration (if you have any specific particles configuration, place it here)
  
  // Card Hover Effect
  const cards = document.querySelectorAll('.card'); // Select all cards
  
  cards.forEach(card => {
    let isMouseOver = false;
    let rotateX = 0;
    let rotateY = 0;
  
    function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }
  
    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }
  
    function updateCardTransform() {
      const transformString = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transform = transformString;
    }
  
    function animate() {
      if (!isMouseOver) {
        rotateX = lerp(rotateX, 0, 0.05);
        rotateY = lerp(rotateY, 0, 0.05);
      }
      updateCardTransform();
      requestAnimationFrame(animate);
    }
  
    card.addEventListener('mousemove', (e) => {
      if (!isMouseOver) return;
  
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
  
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
  
      rotateY = clamp(mouseX / 10, -15, 15);
      rotateX = clamp(-mouseY / 10, -15, 15);
    });
  
    card.addEventListener('mouseenter', () => {
      isMouseOver = true;
      card.style.transition = 'none';
    });
  
    card.addEventListener('mouseleave', () => {
      isMouseOver = false;
      card.style.transition = 'transform 0.6s';
    });
  
    animate();
  });
  
  // Navbar Sticky Behavior on Scroll
  window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    // Check if user has scrolled more than 100px (adjust as needed)
    if (scrollPosition > 200) {
      nav.style.position = 'fixed';
      nav.style.top = '0';
      nav.style.padding = '10px 5%';
      nav.style.width = '100%';
      nav.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // Optional: Add background when sticky
      nav.style.zIndex = '1000'; // Ensure it's above other content
    } else {
      // Reset the nav position when scroll is less than 100px
      nav.style.position = 'absolute';
      nav.style.top = '2%';
      nav.style.backgroundColor = 'transparent'; // Return to initial background (if any)
    }
  });
  
  // Owl Carousel Initialization
  $(document).ready(function () {
    $("#news-slider").owlCarousel({
      items: 4,
      loop: true, // Enable continuous loop
      margin: 20,
      nav: true, // Show navigation arrows
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Custom navigation icons
      autoplay: true, // Enable autoplay
      autoplayTimeout: 3000, // Autoplay interval in milliseconds (3 seconds in this example)
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });
  });
  
  // Menu Toggle for Navbar
  document.getElementById('menuToggle').addEventListener('click', function () {
    var menu = document.getElementById('navbarMenu');
    menu.classList.toggle('hidden');
  });
  
  // Hide Menu and Overlay on Link Click (Mobile)
  document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const overlay = document.getElementById('overlay');
    const navbarLinks = navbarMenu.querySelectorAll('a'); // Select all links inside the navbar
  
    // Toggle the active class when the menu icon is clicked
    menuIcon.addEventListener('click', function () {
      navbarMenu.classList.toggle('active');
      overlay.classList.toggle('active');
    });
  
    // Hide the menu and overlay when the overlay is clicked
    overlay.addEventListener('click', function () {
      navbarMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  
    // Hide the menu and overlay when any link inside the navbar is clicked
    navbarLinks.forEach(link => {
      link.addEventListener('click', function () {
        navbarMenu.classList.remove('active');
        overlay.classList.remove('active');
      });
    });
  });
  
  // Back to Top Button
  let mybutton = document.getElementById("myBtn");
  mybutton.style.display = "none";  // Hide the button by default
  
  // Show the button when scrolled down
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      mybutton.style.display = "block";  // Show button when scrolled down
    } else {
      mybutton.style.display = "none";  // Hide button when at the top of the page
    }
  }
  
  // When the user clicks on the button, scroll to the top
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  