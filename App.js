/**
 * Main application script for handling the music player's UI interactions,
 * song playback, and progress bar updates. It integrates functionalities
 * from the playerControls and progressBarControls modules.
 */

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

// DOM element references
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

/**
 * Initializes the application by loading the first song from the playlist.
 */
loadSong(songs[0], music, image, title, artist);

/**
 * Toggles playback of the current song, playing it if paused, or pausing it if playing.
 */
playBtn.addEventListener('click', () =>
  isPlaying ? pauseSong(music, playBtn) : playSong(music, playBtn)
);

/**
 * Loads and plays the previous song in the playlist when the previous button is clicked.
 */
prevBtn.addEventListener('click', () => prevSong(music, playBtn, image, title, artist));

/**
 * Loads and plays the next song in the playlist when the next button is clicked.
 */
nextBtn.addEventListener('click', () => nextSong(music, playBtn, image, title, artist));

/**
 * Automatically plays the next song in the playlist once the current song ends.
 */
music.addEventListener('ended', () => nextSong(music, playBtn, image, title, artist));

/**
 * Updates the music progress bar and current time display during song playback.
 */
music.addEventListener('timeupdate', (e) =>
  updateProgressBar(isPlaying, music, currentTimeEl, durationEl, progress)
);

/**
 * Allows user to seek within the song by clicking on the progress bar.
 */
progressContainer.addEventListener('click', (e) =>
  setProgressBar(e, music, progressContainer)
);
