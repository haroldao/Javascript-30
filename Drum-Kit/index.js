window.addEventListener('keydown', playSound)

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; // stop the function
    // console.log("audio", audio);
    audio.currentTime=0; //Rewind to the start
    audio.play();

    // console.log("key", key);
    key.classList.add("playing");

}
const keys = document.querySelectorAll(".key");
keys.forEach( key => key.addEventListener("transitionend", removeTransition));

function removeTransition (event){
//    console.log(event);
    this.classList.remove("playing");
}