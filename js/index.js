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

const loadEvent = document.querySelectorAll('img')
loadEvent.forEach(element => {
    element.addEventListener('load', () => {
        element.style.animation = "rotation 2s linear"
    })
})

// #6 Event Listener

const focusEvent = document.querySelectorAll("h2")
focusEvent.forEach(element => {
    element.addEventListener('wheel', () => {
        element.style.color = "red"
        element.style.animation = "rotation 2s infinite linear"
    }, true)
})

focusEvent.forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = "red"
        element.style.animation = "none"
    }, true)
})

// #7 Event Listener

const selectText = document.querySelector("footer")
selectText.addEventListener('select', () => {
    selectText.style.boxShadow = "10px"
})

// #8 Event Listener

const leftPar = document.querySelectorAll('.destination h4')
leftPar.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.color = "purple"
    })
})

// #9 Event Listener

const buttonEvent = document.querySelectorAll('.btn')
buttonEvent.forEach(element => {
    element.addEventListener("mousemove", () => {
        element.style.backgroundColor = "blue"
    })
})

buttonEvent.forEach(element => {
    element.addEventListener("mouseleave", () => {
        element.style.backgroundColor = "#00879F"
    })
})

// #10 Event Listener

const footerEvent = document.querySelector("footer")
footerEvent.addEventListener("mouseover", () => {
    footerEvent.style.backgroundColor = "hotpink"
})

