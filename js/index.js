// #1 Event Listener
const mouseoverLogo = document.querySelector(".logo-heading")
mouseoverLogo.addEventListener("mouseover", () => {
    mouseoverLogo.style.color = "blue";
    mouseoverLogo.style.transition = "all 0.3s"
})

mouseoverLogo.addEventListener("mouseleave", () => {
    mouseoverLogo.style.color = "black";
})

// #2 Event Listener

const navText = document.querySelectorAll('.nav-link')
navText.forEach(title => {
    title.addEventListener('click', () => {
        title.style.fontStyle = "italic";
    })
})

// #3 Event Listenger

const keyed = document.querySelectorAll('p')
keyed.forEach(element => {
    element.addEventListener('click', () => {
        element.style.fontSize = "2rem";
    })
})
keyed.forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.fontSize = "1.6rem";
    })
})

// #4 Event Listenger
const wheelEvent = document.querySelectorAll("img")
wheelEvent.forEach(element => {
    element.addEventListener('wheel', () => {
        element.style.borderRadius = "50%"
    })
})

// #5 Event Listener


