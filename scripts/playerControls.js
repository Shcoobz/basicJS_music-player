/**
 * Module handling player controls and song navigation for a music player application.
 * This includes play, pause, load, previous song, and next song functionalities.
 */

import songs from './songs.js';

// Track playing state and current song index
let isPlaying = false;
let songIndex = 0;

/**
 * Plays the current song.
 * @param {HTMLMediaElement} music - The audio element used for playing music.
 * @param {HTMLElement} playBtn - The play button element.
 */
function playSong(music, playBtn) {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

/**
 * Pauses the current song.
 * @param {HTMLMediaElement} music - The audio element used for playing music.
 * @param {HTMLElement} playBtn - The play button element.
 */
function pauseSong(music, playBtn) {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

/**
 * Loads a song into the player and updates the UI accordingly.
 * @param {Object} song - The song object to load.
 * @param {HTMLMediaElement} music - The audio element used for playing music.
 * @param {HTMLElement} image - The element where the song's image is displayed.
 * @param {HTMLElement} title - The element where the song's title is displayed.
 * @param {HTMLElement} artist - The element where the song's artist is displayed.
 */
function loadSong(song, music, image, title, artist) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

/**
 * Navigates to and plays the previous song in the playlist.
 * @param {HTMLMediaElement} music - The audio element used for playing music.
 * @param {HTMLElement} playBtn - The play button element.
 * @param {HTMLElement} image - The element where the song's image is displayed.
 * @param {HTMLElement} title - The element where the song's title is displayed.
 * @param {HTMLElement} artist - The element where the song's artist is displayed.
 */
function prevSong(music, playBtn, image, title, artist) {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex], music, image, title, artist);
  playSong(music, playBtn);
}

/**
 * Navigates to and plays the next song in the playlist.
 * @param {HTMLMediaElement} music - The audio element used for playing music.
 * @param {HTMLElement} playBtn - The play button element.
 * @param {HTMLElement} image - The element where the song's image is displayed.
 * @param {HTMLElement} title - The element where the song's title is displayed.
 * @param {HTMLElement} artist - The element where the song's artist is displayed.
 */
function nextSong(music, playBtn, image, title, artist) {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex], music, image, title, artist);
  playSong(music, playBtn);
}

export { isPlaying, playSong, pauseSong, prevSong, nextSong, loadSong };
