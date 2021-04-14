const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

setInterval(function sayHi(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60)*360) + 90; // 90  == (default degree)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    console.log(minutes)
    const minutesDegrees = ((minutes / 60)*360) + 90;
    minuteHand.style.transform= `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    console.log(hours)
    const hoursDegrees = ((hours / 12)*360) + 90;
    hourHand.style.transform= `rotate(${hoursDegrees}deg)`;

    if(seconds==0){
        secondHand.style.transitionDuration = '0s';
        minuteHand.style.transitionDuration = '0s';
        hourHand.style.transitionDuration = '0s';
    } 
    else {
        secondHand.style.transitionDuration = '0.05s';
        minuteHand.style.transitionDuration = '0.05s';
        hourHand.style.transitionDuration = '0.05s';
    }
},1000)

