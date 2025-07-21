const navToggle = document.querySelector(".navToggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function (){
    links.classList.toggle("show-links");
})