window.addEventListener('keydown', (e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function
    console.log(audio)
    audio.currentTime=0; //Rewind to the start
    audio.play();

})