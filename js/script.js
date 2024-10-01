// Play/Pause functionality for the video
const video = document.getElementById('background-video');
const pauseButton = document.getElementById('pause-btn');
const muteButton = document.getElementById('mute-btn');

// Autoplay on page load
window.addEventListener('DOMContentLoaded', (event) => {
  video.muted = true; // Mute the video to allow autoplay in some browsers
  video.play();
  
  const firstButton = document.querySelector('.video-btn.active');
  if (firstButton) {
    const initialVideo = firstButton.getAttribute('data-video');
    if (initialVideo) {
      video.src = initialVideo;
      video.play();
    }
  }
});

pauseButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    pauseButton.textContent = 'Pause';
  } else {
    video.pause();
    pauseButton.textContent = 'Play';
  }
});

muteButton.addEventListener('click', function() {
  if (video.muted) {
    video.muted = false;
    muteButton.textContent = 'Mute';
  } else {
    video.muted = true;
    muteButton.textContent = 'Unmute';
  }
});

// Change background video or image based on button click
const videoButtons = document.querySelectorAll('.video-btn');
videoButtons.forEach(button => {
  button.addEventListener('click', function() {
    const newVideo = button.getAttribute('data-video');
    const newImage = button.getAttribute('data-image');
    
    if (newVideo) {
      video.style.display = 'block'; // Ensure video is shown
      video.src = newVideo;
      video.play();
      document.body.style.backgroundImage = ''; // Remove background image when playing video
    } else if (newImage) {
      video.pause();
      video.style.display = 'none'; // Hide video
      document.body.style.backgroundImage = `url(${newImage})`;
      document.body.style.backgroundSize = 'cover';
    }

    // Update button active state
    videoButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
