const burgerMenu = 'images/burger-menu-icon.svg'
const exitMenu = 'images/menu-exit.svg'
let navCounter = 1;

/**
 * Slide in navigation bar on mobile
 */
document.querySelector('.burger-menu').addEventListener('click', function(e) {
    const secondElement = document.body.children[1];
    let nav = document.querySelector('.super-nav');
    let slideInNav = document.querySelector('.slide-in-nav')
    if (navCounter % 2 === 1) { //slide in
        nav.style.position = 'fixed';
        slideInNav.style.transform = 'translateX(0%)';
        e.target.src = exitMenu
        secondElement.style.marginTop = '100px';

    } else { // slide out
        nav.style.position = 'relative';
        slideInNav.style.transform = 'translateX(100%)';
        e.target.src = burgerMenu
        secondElement.style.marginTop = '0px'
    }
    navCounter++
})

