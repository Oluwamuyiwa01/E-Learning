const menuClose = document.querySelector(".menu-close");
const getMenu = document.querySelector(' nav .navigation ul');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', function(e){
    //menu.classList.add("active");
    getMenu.style.right = "0";
})

menuClose.addEventListener('click', function(e){
    getMenu.style.right ="-250px";
})

