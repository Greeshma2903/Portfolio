// toggle btn, #links targeted 
// add .show to toggle, and .show-links links

const navToggle = document.querySelector(".nav-toggle i");
const links = document.querySelector(".nav-links");
console.log(links);

navToggle.addEventListener('click', function(){
    navToggle.classList.toggle("show");
    links.classList.toggle("show-links");
});