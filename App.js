import {
  isPlaying,
  playSong,
  pauseSong,
  prevSong,
  nextSong,
  loadSong,
} from './scripts/playerControls.js';
import { updateProgressBar, setProgressBar } from './scripts/progressBarControls.js';
import songs from './scripts/songs.js';

const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Initialize First Song
loadSong(songs[0], music, image, title, artist);

playBtn.addEventListener('click', () =>
  isPlaying ? pauseSong(music, playBtn) : playSong(music, playBtn)
);

// Event Listeners
prevBtn.addEventListener('click', () => prevSong(music, playBtn, image, title, artist));
nextBtn.addEventListener('click', () => nextSong(music, playBtn, image, title, artist));
music.addEventListener('ended', () => nextSong(music, playBtn, image, title, artist));
music.addEventListener('timeupdate', (e) =>
  updateProgressBar(isPlaying, music, currentTimeEl, durationEl, progress)
);
progressContainer.addEventListener('click', (e) =>
  setProgressBar(e, music, progressContainer)
);
