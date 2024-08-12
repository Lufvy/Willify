document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const pauseButton = document.getElementById("pause");
    const backButton = document.getElementById("back");
    const forwardButton = document.getElementById("forward");
    const currentTime = document.getElementById("current-time");
    const duration = document.getElementById("duration");
    const seekSlider = document.getElementById("seek-slider");

     // Function to extract the page number from the HTML file name
     function getPageNumber(fileName) {
        return parseInt(fileName.match(/\d+/)[0]);
    }

    // Get the current page number from the current HTML file name
    let currentPageNumber = getPageNumber(window.location.pathname);

    // Update current time and duration
    audio.addEventListener("timeupdate", function() {
        currentTime.textContent = formatTime(audio.currentTime);
        duration.textContent = formatTime(audio.duration);
        seekSlider.max = audio.duration;
        seekSlider.value = audio.currentTime;
    });

    // Format time 
    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainderSeconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, "0")}:${String(remainderSeconds).padStart(2, "0")}`;
    }

    // Play/Pause button
    pauseButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            pauseButton.innerHTML = "<img src='/Assets/pause.png' alt='Pause'>";
        } else {
            audio.pause();
            pauseButton.innerHTML = "<img src='/Assets/play.png' alt='Play'>";
        }
    });

    
    // Skip back button
    backButton.addEventListener("click", function() {
        currentPageNumber = currentPageNumber === 1 ? 6 : currentPageNumber - 1;
        window.location.href = `Detail_song_page${currentPageNumber}.html`;
    });

    // Skip forward button
    forwardButton.addEventListener("click", function() {
        currentPageNumber = currentPageNumber === 6 ? 1 : currentPageNumber + 1;
        window.location.href = `Detail_song_page${currentPageNumber}.html`;
    });

    // Seek slider
    seekSlider.addEventListener("input", function() {
        audio.currentTime = seekSlider.value;
        currentTime.textContent = formatTime(audio.currentTime);
    });
    
    audio.controls = false;

    // Change pause button to play button when audio ends
    audio.addEventListener("ended", function() {
        pauseButton.innerHTML = "<img src='/Assets/play.png' alt='Play'>";
    });
});
