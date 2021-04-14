setInterval(function sayHi(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    console.log(seconds)
},1000)

