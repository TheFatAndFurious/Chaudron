const navHeight = 70;
let lastScrollY = 0;
const delta = 10;

function scrolled(){
    const nav = document.querySelector('.container-banner');
    let sy = window.scrollY;
    if(Math.abs(lastScrollY - sy) > delta) {
        if(sy > lastScrollY && sy > navHeight) {
            nav.classList.add("nav-up");
        }
        else if(sy < lastScrollY) {
            nav.classList.remove("nav-up");
        }
        lastScrollY = sy
    }
}

let didScroll = false;
window.addEventListener("scroll", function(e){
    didScroll = true;
})

setInterval(function(){
    if(didScroll){
        scrolled();
        didScroll = false;
    }
}, 250)
