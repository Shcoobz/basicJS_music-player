const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
};

function updateProgressBar(isPlaying, music, currentTimeEl, durationEl, progress) {
  if (!isPlaying) return;

  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  durationEl.textContent = formatTime(duration);
  currentTimeEl.textContent = formatTime(currentTime);
}

function setProgressBar(e, music, progressContainer) {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;

  music.currentTime = (clickX / width) * duration;
}

export { updateProgressBar, setProgressBar };
