
function toggleMenu() {
document.getElementById("menu").classList.add("open");
document.getElementById("menuButton").style.display = "none";
menu.scrollLeft = menu.scrollWidth;
}

function handleSiteInteraction(event) {
  if (document.querySelectorAll(".sidebar.open").length > 0) {
    return;
  }

  if (
    document.getElementById("menu").contains(event.target) ||
    document.getElementById("menuButton").contains(event.target)
  ) {
    return;
  }

  document.getElementById("menu").classList.remove("open");
  document.getElementById("menuButton").style.display = "inline-block";
}

function openSidebar(id) {
document.querySelectorAll('.sidebar').forEach(el => el.classList.remove("open"));
document.getElementById("overlay").classList.remove("show");
document.getElementById("menu").classList.remove("open");
document.getElementById("scrollTopButton").style.display = "none";
document.getElementById("menuButton").style.display = "none";

document.getElementById(id).classList.add("open");
document.getElementById("overlay").classList.add("show");
}

function closeSidebars() {
document.querySelectorAll('.sidebar').forEach(el => el.classList.remove("open"));
document.getElementById("overlay").classList.remove("show");
document.getElementById("menu").classList.remove("open");
document.getElementById("menuButton").style.display = "inline-block";
updateScrollTopButtonVisibility();
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

function updateExpandCollapseButtonVisibility() {
  const expandCollapseButton = document.getElementById("expand-collapse-button");
  const contentDetails = document.querySelectorAll('main.content details');

  if (contentDetails.length > 0) {
    expandCollapseButton.style.display = "inline-block";
  } else {
    expandCollapseButton.style.display = "none";
  }
}

function updateButtonText() {
  const allDetails = document.querySelectorAll('details');
  const button = document.getElementById('expand-collapse-button');
  const anyOpen = Array.from(allDetails).some(detail => detail.open);
  button.textContent = anyOpen ? '▸ All' : '▾ All';
}

function updateScrollTopButtonVisibility() {
  const scrollTopButton = document.getElementById("scrollTopButton");
  if (window.scrollY > window.innerHeight * 0.5) {
    scrollTopButton.style.display = "inline-block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const allDetails = document.querySelectorAll('details');
  allDetails.forEach(detail => {
    detail.addEventListener('toggle', updateButtonText);
  });

  updateScrollTopButtonVisibility();
  updateExpandCollapseButtonVisibility();

  // Listen for general interactions
  document.addEventListener("click", handleSiteInteraction);
  document.addEventListener("touchstart", handleSiteInteraction);
  document.addEventListener("keydown", handleSiteInteraction);
  document.addEventListener("scroll", handleSiteInteraction);
});

// Call on scroll
window.addEventListener("scroll", updateScrollTopButtonVisibility);

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
