// Your code goes here
// gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, TextPlugin);


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

// prevents default behavior of nav links
hoverNav.forEach((element) =>{
    element.click((e)=> {
        e.preventDefault();
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

// scales image x2 when double clicked
images.forEach((element) => {
    element.addEventListener('dblclick' , (e) => {
        element.style.transform = "scale(1.5)";
        e.stopPropagation();
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

// activates alert when bottom button is mousedown
// buttons.forEach((element) => {
//     element.addEventListener('mousedown' (e) => {
//         window.alert("Page coming soon!");
//     })
// })
// need to make the event a keydown event and use wondow.alert to activate



// inverts color of test when selected 
let paragraphs = document.querySelectorAll('p');

paragraphs.forEach((element) => {
    element.addEventListener('select', (e) => {
        element.style.color = "white";
        e.stopPropagation();
    })
})


// animates intro header content
let introContent = document.querySelector('.intro');

introContent.addEventListener('mouseenter', () => {
    gsap.from(this, {duration: 2, rotate: 360});
})









