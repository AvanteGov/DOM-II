// Your code goes here

// adds color to nav links when mouse hovers 
let hoverNav = document.querySelectorAll('.nav-link');

hoverNav.forEach((element) => {
    element.addEventListener('mouseover', (e) =>{
        element.style.color = "green"
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
})


// buttons read "let's go" upon mouse over
let buttons = document.querySelectorAll('.btn');

buttons.forEach((element) => {
    element.addEventListener('mouseenter', (e) => {{
        element.textContent = "Let's Go!";
        e.stopPropagation();
    }})
})

