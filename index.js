
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


// rotate button 

function spinButton(){
    const icon = document.querySelectorAll("i");

    icon.forEach((icon) =>{
        icon.addEventListener('click', (e) => {
            let spin = icon.classList.add('spin_btn')
            setTimeout ( () => {
                icon.classList.remove('spin_btn')
            } , 2000 )
        })
    }) 
}
spinButton()