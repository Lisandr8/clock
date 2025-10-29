const hourHand = document.querySelector('.hours-hand');
const minsHand = document.querySelector('.mins-hand');
const secsHand = document.querySelector('.secs-hand');
const showTime = document.querySelector('h1');

function setDate() {
    const now = new Date()

    const secs = now.getSeconds();
    const secsDegrees = ((secs / 60) * 360) + 90;
    secsHand.style.transform = `rotate(${secsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((secs / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    showTime.innerText = `${hours} : ${mins} : ${secs}`
}

setInterval(setDate, 1000)

