import { gsap } from 'gsap';

const redRocket = document.querySelector('.blocks .block--red')
const blueRocket = document.querySelector('.blocks .block--blue')
const greenRocket = document.querySelector('.blocks .block--green')
const pinkRocket = document.querySelector('.blocks .block--pink')
const grayRocket = document.querySelector('.blocks .block--gray')

redRocket.addEventListener('click', () => {
    gsap.to(blueRocket, {duration: 2, y: 0})
    gsap.to(redRocket, {duration: 2, y: 0})
    gsap.to(greenRocket, {duration: 2, y: 0})
    gsap.to(pinkRocket, {duration: 2, y: 0})
    gsap.to(grayRocket, {duration: 2, y: 0})
})

blueRocket.addEventListener('click', () => {
    gsap.to(blueRocket, {duration: 2, y: -120})
    gsap.to(redRocket, {duration: 2, y: 120})
    gsap.to(greenRocket, {duration: 2, y: 0})
    gsap.to(pinkRocket, {duration: 2, y: 0})
    gsap.to(grayRocket, {duration: 2, y: 0})
});

greenRocket.addEventListener('click', () => {
    gsap.to(greenRocket, {duration: 2, y: -240})
    gsap.to(blueRocket, {duration: 2, y: 120})
    gsap.to(redRocket, {duration: 2, y: 120})
    gsap.to(pinkRocket, {duration: 2, y: 0})
    gsap.to(grayRocket, {duration: 2, y: 0})
})

pinkRocket.addEventListener('click', () => {
    gsap.to(pinkRocket, {duration: 2, y: -360})
    gsap.to(greenRocket, {duration: 2, y: 120})
    gsap.to(blueRocket, {duration: 2, y: 120})
    gsap.to(redRocket, {duration: 2, y: 120})
    gsap.to(grayRocket, {duration: 2, y: 0})
})

grayRocket.addEventListener('click', () => {
    gsap.to(grayRocket, {duration: 2, y: -480})
    gsap.to(pinkRocket, {duration: 2, y: 120})
    gsap.to(greenRocket, {duration: 2, y: 120})
    gsap.to(blueRocket, {duration: 2, y: 120})
    gsap.to(redRocket, {duration: 2, y: 120})
})

