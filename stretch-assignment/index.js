const red = "block block--red"
const blue = "block block--blue"
const green = "block block--green"
const pink = "block block--pink"
const gray = "block block--gray"

const redRocket = document.querySelector('.blocks .block--red')
const blueRocket = document.querySelector('.blocks .block--blue')
const greenRocket = document.querySelector('.blocks .block--green')
const pinkRocket = document.querySelector('.blocks .block--pink')
const grayRocket = document.querySelector('.blocks .block--gray')


blueRocket.addEventListener('click', () => {
    blueRocket.className = red
    redRocket.className = blue
});

greenRocket.addEventListener('click', () => {
    redRocket.className = green
    blueRocket.className = red
    greenRocket.className = blue
})

pinkRocket.addEventListener('click', () => {
    redRocket.className = pink
    blueRocket.className = red
    greenRocket.className = blue
    pinkRocket.className = green
})

grayRocket.addEventListener('click', () => {
    redRocket.className = gray
    blueRocket.className = red
    greenRocket.className = blue
    pinkRocket.className = green
    grayRocket.className = pink
})