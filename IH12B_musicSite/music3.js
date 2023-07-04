
var flag = true

// 要素
const music3 = new Audio('./mp4/3_bluehamu.mp4')

const play3 = document.getElementById('play3')
const volumeUp = document.getElementById('volume-up')
const volumeDown = document.getElementById('volume-down')
const mute = document.getElementById('mute')
const leftdom = document.querySelector(`#record1`) 
const rightdom = document.querySelector(`#record2`) 
const scrolldom = document.getElementById('title_scroll')




//仕様
let leftdomanime = leftdom.animate(
  [
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(360deg)' }
  ],
  {
    duration: 1500,
    easing: 'linear',
    iterations: Infinity
  }
);

let rightdomanime = rightdom.animate(
  [
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(360deg)' }
  ],
  {
    duration: 1500,
    easing: 'linear',
    iterations: Infinity
  }
);

let scrolldomanime = scrolldom.animate(
  [
    { left: '-100%' },
    { left: '170% ' }
  ],
  {
    duration: 20000,
    easing: 'linear',
    iterations: Infinity
  }
);


// 初期値
leftdomanime.pause();
rightdomanime.pause();
scrolldomanime.pause();

// 再生ボタン
play3.addEventListener('click', function(){
  if (flag) {
    flag = false
    leftdomanime.play();
    rightdomanime.play();
    scrolldomanime.play();
  } else {
    flag = true
    leftdomanime.pause();
    rightdomanime.pause();
    scrolldomanime.pause();
  }
  
  if(!music3.paused){
    play3.innerHTML = "MUSIC START!";
    music3.pause();
  }else{
    play3.innerHTML = "MUSIC STOP!";
    music3.play();
    music3.loop = true;
  }
});






// 音量ボタン
volumeUp.addEventListener('click', function(){
  const volume = music3.volume;
  if(volume < 1){
    music3.volume = (volume * 10 + 1) / 10;
  }
});
volumeDown.addEventListener('click', function(){
  const volume = music3.volume;
  if(volume > 0){
    music3.volume = (volume * 10 - 1) / 10;
  }
});

// ミュートボタン
mute.addEventListener('click', function(){
  if(music3.muted){
    music3.muted = false;
    mute.innerHTML = '<i class="fas fa-volume-mute">';
    mute.innerHTML = "MUTE ON!"
  }else{
    music3.muted = true;
    mute.innerHTML = '<i class="fas fa-volume-up"></i>';
    mute.innerHTML = "MUTE OFF!"
  }
});


