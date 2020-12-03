const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
var MenuItems = document.getElementById("MenuItems");


var w = window.innerWidth;
if (window.innerWidth<800){
    MenuItems.style.maxHeight = "0px";
}else{
    MenuItems.style.maxHeight = "65px";
}

window.addEventListener('resize', function(){
    if (window.innerWidth<800){
        MenuItems.style.maxHeight = "0px";
    
    }else{
        MenuItems.style.maxHeight = "65px";

    }
}, true);


menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        MenuItems.style.maxHeight = "65px";

    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        MenuItems.style.maxHeight = "0px";

    }
});


