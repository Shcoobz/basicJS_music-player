import songs from './songs.js';

let isPlaying = false;
let songIndex = 0;

function playSong(music, playBtn) {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseSong(music, playBtn) {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

function loadSong(song, music, image, title, artist) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

function prevSong(music, playBtn, image, title, artist) {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex], music, image, title, artist);
  playSong(music, playBtn);
}

function nextSong(music, playBtn, image, title, artist) {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex], music, image, title, artist);
  playSong(music, playBtn);
}

export { isPlaying, playSong, pauseSong, prevSong, nextSong, loadSong };
