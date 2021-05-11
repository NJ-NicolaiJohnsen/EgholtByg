const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuPath = 'images/burger-menu-icon.svg'
const exitMenuPath = 'images/menu-exit.svg'
const secondDOMElement = document.body.children[1];
const nav = document.querySelector('.super-nav');
const slideInNav = document.querySelector('.slide-in-nav')
// TO DOs


/**
 * Slide in navigation bar on mobile
 */

function getParentElement(element) {
    if (element.parentElement !== document.body) {
        return getParentElement(element.parentElement)
    }
    return element
}

const slideOutByBodyClick = (e) => {
    if (getParentElement(e.target) !== document.querySelector('.super-nav')) {
        slideOut()
    }
}

const slideOut = () => {
    nav.style.position = 'relative';
    slideInNav.style.transform = 'translateX(100%)';
    secondDOMElement.style.marginTop = '0px'
    burgerMenu.setAttribute("src", burgerMenuPath)

    document.body.removeEventListener('click', slideOutByBodyClick)
}

const slideIn = ()=> {
    nav.style.position = 'fixed';
    slideInNav.style.transform = 'translateX(0%)';
    secondDOMElement.style.marginTop = '100px';
    burgerMenu.setAttribute("src", exitMenuPath)
}

burgerMenu.addEventListener('click', function() {
    if (burgerMenu.getAttribute("src") === burgerMenuPath) { //slide in
        slideIn()
        document.body.addEventListener('click', slideOutByBodyClick, {capture: true})
    } else { // slide out
        slideOut()
    }
})

// Change background color on input fields from grey to white when non-empty, and back again when empty.
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('change', function (e) {
        if (e.target.value !== "") {
            e.target.style.background = 'white'
        } else {
            e.target.style.background = '#40676E11'
        }
    })
})



