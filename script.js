// Get the button element from the HTML file
const button = document.getElementById("buttonLol");

// Get the audio element from the HTML file
const audio = document.getElementById("click-sound");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Play the audio file
  audio.play();
});
