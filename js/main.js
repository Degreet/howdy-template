const burger = document.getElementsByClassName("burger")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];

burger.onclick = burgerHandler;

function burgerHandler() {
    sidebar.classList.toggle("active");
}