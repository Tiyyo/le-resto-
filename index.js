
// activation menu burger 

function activeMenu (){
const icBurger = document.querySelector(".hamburger-ic");
const navLinks = document.querySelector(".main-navbar");
const burgerMenu =  document.querySelector(".bar")

icBurger.addEventListener('click',() => {  
    navLinks.classList.toggle('active')
    burgerMenu.classList.toggle('remove_bar')
})
}
activeMenu();