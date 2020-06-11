// CREDITS TO: Dev Ed 
// VIDEO REFERRED: Build A Meditation App With Javascript HTML & CSS!
// LINK: https://www.youtube.com/watch?v=oMBXdZzYqEk

const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');
    // Sound buttons
    const sounds = document.querySelectorAll('.sound-picker button');
    // Time Display
    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-select button');
    //Get the length of the outline (svg)
    const outlineLength = outline.getTotalLength();
  
    //Duration
    var fakeDuration = 300;
  
    // Makes sure that the stroke is full
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;
  
    // Pick different sounds when sound button is clicked
    sounds.forEach(sound => {
      //   On click, get the attribute of the song and video
      sound.addEventListener('click', function () {
        song.src = this.getAttribute('data-sound');
        video.src = this.getAttribute('data-video');
        //   Check whether the song is playing
        checkPlaying(song);
      });
    });
  
    //   Check whether the song is playing
    play.addEventListener('click', () => {
      checkPlaying(song);
    });
  
    //Select time
    timeSelect.forEach((option) => {
      // On click, get the attribute of the data-time in seconds
      option.addEventListener('click', function () {
        // fakeDuration is the selected time in seconds
        fakeDuration = this.getAttribute('data-time');
        //   Set the time in html based on the selected time.
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
      });
    });
  
    //   Create a function specific to stop and play the sound
    const checkPlaying = (song) => {
      //   If song is paused, play the song and video when the button is clicked & display the pause svg
      //   If song is playing, pause the song and video when the button is clicked & display the play svg
      if (song.paused) {
        song.play();
        video.play();
        play.src = 'assets/MeditationApp/svg/pause.svg';
      } else {
        song.pause();
        video.pause();
        play.src = 'assets/MeditationApp/svg/play.svg';
      }
    };
  
    //   Animating the circle
    song.ontimeupdate = () => {
      var currentTime = song.currentTime;
      var elapsed = fakeDuration - currentTime;
      var seconds = Math.floor(elapsed % 60);
      var minutes = Math.floor(elapsed / 60);
  
      // Animate the circle
      var progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
      outline.style.strokeDashoffset = progress;
  
      //   Animate the text
      timeDisplay.textContent = `${minutes}:${seconds}`;
  
      // If currentTime is greater or equals to the fakeDuration, song pauses & reset, svg changes to play and video pauses.
      // fakeDuration is the selected time in seconds
      // currentTime is the time of the song (total time that the song is looped for)
      if (currentTime >= fakeDuration) {
        song.pause();
        song.currentTime = 0;
        play.src = 'assets/MeditationApp/svg/play.svg';
        video.pause();
      }
    };
  };
  
  app();
  