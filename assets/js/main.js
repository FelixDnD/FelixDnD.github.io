
function toggleMenu() {
document.getElementById("menu").classList.add("open");
document.getElementById("menuButton").style.display = "none";
menu.scrollLeft = menu.scrollWidth;
}

function openSidebar(id) {
closeSidebars(); // close others
document.getElementById(id).classList.add("open");
document.getElementById("overlay").classList.add("show");
document.getElementById("menu").classList.remove("open");
}

function closeSidebars() {
document.querySelectorAll('.sidebar').forEach(el => el.classList.remove("open"));
document.getElementById("overlay").classList.remove("show");
document.getElementById("menuButton").style.display = "inline-block";
}

function goHome() {
window.location.href = "/index.html";
}

function scrollToTop() {
window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide scroll button after scrolling
window.addEventListener("scroll", function () {
const scrollTopButton = document.getElementById("scrollTopButton");
if (window.scrollY > window.innerHeight * 2) {
    scrollTopButton.style.display = "inline-block";
} else {
    scrollTopButton.style.display = "none";
}
})