// Your code goes here
// import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
// import { TextPlugin } from "gsap/TextPlugin.js";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
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
buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
        window.alert("Page coming soon!");
    })
})




// inverts color of test when selected 
let paragraphs = document.querySelectorAll('.test');

paragraphs.forEach((element) => {
    element.addEventListener('contextmenu', (e) => {
        element.style.color = "blue";
        e.stopPropagation();
    })
})



// animates intro header content
let introContent = document.querySelector('.intro-img');

introContent.addEventListener('mousedown', (e) => {
    gsap.from('.intro-img', {duration: 2, rotate: 360});
})

// alert when image is dragged 
images.forEach((element) => {
    element.addEventListener("dragend", (e) => {
        window.alert("stop dragging me down");
    })
})


// when text is inputed display a new paragraph
let inputFields = document.querySelector('.inputFields')
let input = document.querySelectorAll('.personalInfo');
let newField = document.createElement('input');
newField.classList.add('personalInfo');

input.forEach((element) => {
    element.addEventListener('input', (e) =>{
        inputFields.appendChild(newField)
        e.stopPropagation();
    })
})

// resizing sets off "do you need glasses?" alert 
document.addEventListener('resize', (e) =>{
    alert('do you need glasses?')
})

// can you add events directly to the doc? 

// keydown hides the entire container
let entireThing = document.querySelector('body');

entireThing.addEventListener('keydown', (e) => {
    entireThing.classList.add('hide');
})

// copying <p> text give copyright alert 
paragraphs.forEach((element) => {
    element.addEventListener('copy', (e) =>{
        alert("do you know anything about copyright?")
    })
})









