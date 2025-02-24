// Play/Pause functionality for the video
const video = document.getElementById('background-video');
const pauseButton = document.getElementById('pause-btn');
const muteButton = document.getElementById('mute-btn');
const pauseIcon = pauseButton.querySelector('i');
const muteIcon = muteButton.querySelector('i');

// Autoplay on page load
window.addEventListener('DOMContentLoaded', (event) => {
  // video.muted = true; // Muting is now done in HTML with 'muted' attribute for better initial behavior. Keep this for redundancy if needed.
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
    pauseIcon.classList.remove('fa-play');
    pauseIcon.classList.add('fa-pause');
    pauseButton.setAttribute('aria-label', 'Pause'); // Accessibility update
  } else {
    video.pause();
    pauseIcon.classList.remove('fa-pause');
    pauseIcon.classList.add('fa-play');
    pauseButton.setAttribute('aria-label', 'Play'); // Accessibility update
  }
});

muteButton.addEventListener('click', function() {
  if (video.muted) {
    video.muted = false;
    muteIcon.classList.remove('fa-volume-mute');
    muteIcon.classList.add('fa-volume-up');
    muteButton.setAttribute('aria-label', 'Mute'); // Accessibility update
  } else {
    video.muted = true;
    muteIcon.classList.remove('fa-volume-up');
    muteIcon.classList.add('fa-volume-mute');
    muteButton.setAttribute('aria-label', 'Unmute'); // Accessibility update
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