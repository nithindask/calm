// Get elements
const audio = document.getElementById("background-audio");
const playButton = document.getElementById("play-button");

// Initial state: play
let isPlaying = false;

// Function to toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        // Pause the audio and change the image to play button
        audio.pause();
        playButton.src = "play.png"; // Replace with your play button image
    } else {
        // Play the audio and change the image to pause button
        audio.play();
        playButton.src = "pause.png"; // Replace with your pause button image
    }
    isPlaying = !isPlaying; // Toggle the state
}

// Add click event listener to the document (entire screen)
document.addEventListener("click", () => {
    togglePlayPause(); // Toggle play/pause when anywhere on the screen is clicked
});

// Add event listener to detect spacebar key press
document.addEventListener("keydown", (event) => {
    if (event.key === " ") { // Check if the key is spacebar
        event.preventDefault(); // Prevent scrolling the page
        togglePlayPause(); // Toggle play/pause when spacebar is pressed
    }
});
