(() => {
  let keys = Array.from(document.querySelectorAll('.key'));

 keys.forEach(key => key.addEventListener('transitionend', resetKey));

 function resetKey() {
   this.classList.remove('playing');
 }

function playSound(event) {
    //debugger;
  let audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  // the ! is a check for inequality ( it means condition is false )
  // also called a bang operator

  if  (!audioElement) { return }


// if we have a match, then play the sound that goes with the keyboard key
   audioElement.currentTime = 0; // no brackets means its a interval
  audioElement.play(); // round brackets means that its a method - a built in function

  key.classList.add('playing');
}

// add an event listner to the window
// and capture all the keyboard key presses
  window.addEventListener('keydown', playSound);


})();
