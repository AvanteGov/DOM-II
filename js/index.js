// Your code goes here

// adds color to nav links when mouse hovers 
let hoverNav = document.querySelectorAll('.nav-link');

hoverNav.forEach((element) => {
    element.addEventListener('mouseover', (e) =>{
        element.style.color = "green"
        e.stopPropagation();
    })
    element.addEventListener('mouseleave', (e) => {
        element.style.color = "black";
        e.stopPropagation();
    })
})


// images darken upon mouseover
let images = document.querySelectorAll('img');

images.forEach((element) => {
    element.addEventListener('mouseenter', (e) => {
        element.style.filter = "brightness(50%)";
        e.stopPropagation();
    })
    element.addEventListener('mouseleave', (e) => {
        element.style.filter = "brightness(100%)"
    })
})


// buttons read "let's go" upon mouse over, changes back upon leave.
let buttons = document.querySelectorAll('.btn');

buttons.forEach((element) => {
    element.addEventListener('mouseenter', (e) => {{
        element.textContent = "Let's Go!";
        e.stopPropagation();
    }})
    element.addEventListener('mouseleave', (e) =>  {
        element.textContent = 'Sign me up!';
        e.stopPropagation();
    })
})

// animates intro header content
let introContent = document.querySelector('.intro');

introContent.addEventListener('mouseenter', () => {
    gsap.from(this, {duration: 2, rotate: 360});
})









