/**
 * Formats a time value in seconds into a string of format "MM:SS".
 * @param {number} time - The time in seconds to format.
 * @returns {string} The formatted time string.
 */
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
};

/**
 * Updates the progress bar and time displays based on the current playback state.
 * Only operates if the music is currently playing.
 * @param {boolean} isPlaying - Indicates whether a song is currently playing.
 * @param {HTMLMediaElement} music - The audio element containing the current song.
 * @param {HTMLElement} currentTimeEl - The DOM element displaying the current time of the song.
 * @param {HTMLElement} durationEl - The DOM element displaying the total duration of the song.
 * @param {HTMLElement} progress - The DOM element representing the progress bar's filled portion.
 */
function updateProgressBar(isPlaying, music, currentTimeEl, durationEl, progress) {
  if (!isPlaying) return;

  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  durationEl.textContent = formatTime(duration);
  currentTimeEl.textContent = formatTime(currentTime);
}

/**
 * Sets the current playback time of the song based on the user's click position on the progress bar.
 * @param {MouseEvent} e - The click event on the progress bar container.
 * @param {HTMLMediaElement} music - The audio element containing the current song.
 * @param {HTMLElement} progressContainer - The DOM element representing the entire progress bar.
 */
function setProgressBar(e, music, progressContainer) {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;

  music.currentTime = (clickX / width) * duration;
}

export { updateProgressBar, setProgressBar };
