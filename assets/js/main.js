
function toggleMenu() {
document.getElementById("menu").classList.add("open");
document.getElementById("menuButton").style.display = "none";
menu.scrollLeft = menu.scrollWidth;
}

function openSidebar(id) {
closeSidebars();
document.getElementById(id).classList.add("open");
document.getElementById("overlay").classList.add("show");
}

function closeSidebars() {
document.querySelectorAll('.sidebar').forEach(el => el.classList.remove("open"));
document.getElementById("overlay").classList.remove("show");
document.getElementById("menu").classList.remove("open");
document.getElementById("menuButton").style.display = "inline-block";
}

function goHome() {
window.location.href = "/index.html";
}

function scrollToTop() {
window.scrollTo({ top: 0, behavior: "smooth" });
}

function expandCollapseAll() {
  const allDetails = document.querySelectorAll('details');
  const button = document.getElementById('expand-collapse-button');
  const anyOpen = Array.from(allDetails).some(detail => detail.open);

  allDetails.forEach(detail => {
    detail.open = !anyOpen;
  });

  updateButtonText();
}

function updateButtonText() {
  const allDetails = document.querySelectorAll('details');
  const button = document.getElementById('expand-collapse-button');
  const anyOpen = Array.from(allDetails).some(detail => detail.open);
  button.textContent = anyOpen ? '▸ All' : '▾ All';
}

function updateScrollTopButtonVisibility() {
  const scrollTopButton = document.getElementById("scrollTopButton");
  if (window.scrollY > window.innerHeight * 2) {
    scrollTopButton.style.display = "inline-block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

// Attach toggle listeners once on page load
document.addEventListener('DOMContentLoaded', () => {
  const allDetails = document.querySelectorAll('details');
  allDetails.forEach(detail => {
    detail.addEventListener('toggle', updateButtonText);
  });
});

// Call on scroll
window.addEventListener("scroll", updateScrollTopButtonVisibility);

// Also call on page load
document.addEventListener("DOMContentLoaded", updateScrollTopButtonVisibility);


// List detection
document.querySelectorAll("ul > li").forEach(li => {
    if (li.querySelector("details")) {
      li.classList.add("is-expand");
    } else if (li.querySelector("a")) {
      li.classList.add("is-link");
    } else {
      li.classList.add("is-normal");
    }
  });
