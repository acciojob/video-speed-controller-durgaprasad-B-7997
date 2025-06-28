const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

speed.addEventListener('mousemove', (e) => {
  const rect = speed.getBoundingClientRect();
  const x = e.clientX - rect.left; // mouse X relative to speed container
  const percent = x / rect.width;

  // Map percent [0, 1] to playback rate [0.4, 4]
  const minRate = 0.4;
  const maxRate = 4;
  let playbackRate = minRate + percent * (maxRate - minRate);

  // Clamp the playbackRate so it never goes below or above limits
  playbackRate = Math.min(maxRate, Math.max(minRate, playbackRate));

  // Update video playback speed
  video.playbackRate = playbackRate;

  // Update speed-bar display (round to 2 decimals)
  speedBar.textContent = playbackRate.toFixed(2) + '×';

  // Optionally update visual width of speed bar as a progress
  speedBar.style.width = `${percent * 100}%`;
});

// Optionally reset speed bar on mouse leave
speed.addEventListener('mouseleave', () => {
  video.playbackRate = 1;
  speedBar.textContent = '1×';
  speedBar.style.width = '100%';
});
