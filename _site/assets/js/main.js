
function toggleMenu() {
document.getElementById("menu").classList.add("open");
document.getElementById("menuButton").style.display = "none";
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