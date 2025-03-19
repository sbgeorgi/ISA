// Play/Pause functionality for the video
const video = document.getElementById('background-video');
const pauseButton = document.getElementById('pause-btn');
const muteButton = document.getElementById('mute-btn');
const pauseIcon = pauseButton.querySelector('i');
const muteIcon = muteButton.querySelector('i');

// Expand/Collapse Toggle for mobile overlay buttons
const buttonContainer = document.querySelector('.button-container');
const expandBtn = document.getElementById('expand-btn');

/**
 * Simple mobile detection based on the user agent.
 * This will return true for common mobile devices regardless of orientation.
 */
function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Autoplay on page load and initialize video from active button
window.addEventListener('DOMContentLoaded', (event) => {
  // Start video playback
  video.play();

  // Load video from the active button if available
  const firstButton = document.querySelector('.video-btn.active');
  if (firstButton) {
    const initialVideo = firstButton.getAttribute('data-video');
    if (initialVideo) {
      video.src = initialVideo;
      video.play();
    }
  }

  // If the device is mobile, collapse the button container so only the active button is visible.
  if (isMobileDevice()) {
    buttonContainer.classList.add('collapsed');
  }
});

// Pause/Play toggle for video
pauseButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    pauseIcon.classList.remove('fa-play');
    pauseIcon.classList.add('fa-pause');
    pauseButton.setAttribute('aria-label', 'Pause');
  } else {
    video.pause();
    pauseIcon.classList.remove('fa-pause');
    pauseIcon.classList.add('fa-play');
    pauseButton.setAttribute('aria-label', 'Play');
  }
});

// Mute/Unmute toggle for video
muteButton.addEventListener('click', function() {
  if (video.muted) {
    video.muted = false;
    muteIcon.classList.remove('fa-volume-mute');
    muteIcon.classList.add('fa-volume-up');
    muteButton.setAttribute('aria-label', 'Mute');
  } else {
    video.muted = true;
    muteIcon.classList.remove('fa-volume-up');
    muteIcon.classList.add('fa-volume-mute');
    muteButton.setAttribute('aria-label', 'Unmute');
  }
});

// Toggle the expand/collapse state for the button container on mobile
expandBtn.addEventListener('click', () => {
  if (buttonContainer.classList.contains('collapsed')) {
    buttonContainer.classList.remove('collapsed');
    expandBtn.innerText = 'Collapse';
  } else {
    buttonContainer.classList.add('collapsed');
    expandBtn.innerText = 'Expand';
  }
});

// Change background video or image based on video button click
const videoButtons = document.querySelectorAll('.video-btn');
videoButtons.forEach(button => {
  button.addEventListener('click', function() {
    const newVideo = button.getAttribute('data-video');
    const newImage = button.getAttribute('data-image');

    if (newVideo) {
      video.style.display = 'block'; // Show video
      video.src = newVideo;
      video.play();
      document.body.style.backgroundImage = ''; // Remove any background image
    } else if (newImage) {
      video.pause();
      video.style.display = 'none'; // Hide video when using an image
      document.body.style.backgroundImage = `url(${newImage})`;
      document.body.style.backgroundSize = 'cover';
    }

    // Update active state for video buttons
    videoButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // On mobile devices, collapse the container after selection.
    if (isMobileDevice()) {
      buttonContainer.classList.add('collapsed');
      expandBtn.innerText = 'Expand';
    }
  });
});

// Dynamically adjust the video styling based on the window dimensions.
function adjustVideoSize() {
  if (isMobileDevice()) {
    // For mobile devices—even in landscape—ensure the video is fully visible.
    video.style.position = "relative";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100%";
    video.style.height = "auto";
    video.style.objectFit = "contain"; // Show entire video (letterboxing may occur)
    video.style.transform = "none";
  } else {
    // For larger screens, maintain the background video style.
    video.style.position = "absolute";
    video.style.top = "50%";
    video.style.left = "50%";
    video.style.width = "auto";
    video.style.height = "auto";
    video.style.minWidth = "100%";
    video.style.minHeight = "100%";
    video.style.transform = "translate(-50%, -50%)";
    video.style.objectFit = "cover";
  }
}

// Adjust video size on load and on window resize.
window.addEventListener('resize', adjustVideoSize);
adjustVideoSize();
