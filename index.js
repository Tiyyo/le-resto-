const icBurger = document.querySelector(".hamburger-ic");
const navLinks = document.querySelector(".main-navbar");



icBurger.addEventListener('click',(e) => {  
    navLinks.classList.toggle('active')
    navLinks.classList.remove('main-navbar')
    
})

