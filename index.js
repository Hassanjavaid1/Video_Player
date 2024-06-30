let videoPlayer = document.getElementById("videoPlayer");
let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");
let timeLine = document.getElementById("timeLine");
let videoLine = document.getElementById("videoLine");
let volume_element = document.getElementById("volume_element");
let videoBar = document.getElementById("videoBar");
let Mute = document.getElementById("mute");
let playPause = document.getElementById("playPause");
let parentInput = document.querySelector(".moreVideoFeatures")
let playBackSpeed  = document.getElementById('playBackSpeed')
let speedRate = document.getElementById('speedRate')
let videoSource = document.getElementById('videoSource')

let isPlaying = false;

const playVideo = () =>{
let url = videoSource.value.trim()
console.log(url)
if(url){
  videoPlayer.src = url
  videoPlayer.load()
  videoPlayer.play()
}
}


setInterval(() => {
  let currMinutes = Math.floor(videoPlayer.currentTime / 60);
  let currSecond = Math.floor(videoPlayer.currentTime % 60);
  startTime.textContent = `${currMinutes
    .toString()
    .padStart(2, "0")}:${currSecond.toString().padStart(2, "0")}`;
}, 1000);

console.log(isPlaying);
const handleVideoPlay = () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPause.src = "pause-solid.svg";
    playPause.title = "Pause";
  } else {
    playPause.src = "play-solid.svg";
    playPause.title = "Play";
    videoPlayer.pause();
  }

  let minutesDuration = Math.floor(videoPlayer.duration / 60);
  let secondDuration = Math.floor(videoPlayer.duration % 60);
  endTime.textContent = `${minutesDuration
    .toString()
    .padStart(2, "0")}:${secondDuration.toString().padStart(2, "0")}`;

  videoPlayer.addEventListener("timeupdate", () => {
    let currentTime = videoPlayer.currentTime;
    let durationTime = videoPlayer.duration;
    let width = (currentTime / durationTime) * 100;
    videoLine.style.width = width + "%";
  });
};

volume_element.addEventListener("input", () => {
  videoPlayer.volume = volume_element.value;
});

const backwardPlay = () => {
  videoPlayer.currentTime -= 10;
};
const forwardPlay = () => {
  videoPlayer.currentTime += 10;
};

const handleMute = () => {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    Mute.src = "volume-high-solid.svg";
    volume_element.value = 0.5;
  } else {
    videoPlayer.muted = true;
    Mute.src = "volume-xmark-solid.svg";
    volume_element.value = 0;
  }
};

const handleExpandScreen = ()=>{
  videoPlayer.requestFullscreen()
}

const handlePlayBackSpeed = () =>{
    playBackSpeed.classList.toggle("toggle")
    playBackSpeed.addEventListener('input',()=>{
    let currentSpeed = videoPlayer.playbackRate = playBackSpeed.value;
    speedRate.innerHTML = currentSpeed

    })

    playBackSpeed.addEventListener('loadedmetadata',()=>{
      videoPlayer.textTracks[0]
      track.mode = 'showing'
      console.log(      videoPlayer.textTracks[0]
      )
   
    })
  }