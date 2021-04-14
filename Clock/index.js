const secondHand = document.querySelector(".second-hand");

setInterval(function sayHi(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60)*360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    console.log(seconds);
},1000)

