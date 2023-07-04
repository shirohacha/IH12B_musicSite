
var flag = true

// 要素

const music2 = new Audio('./mp4/2_bluehamu.mp4')



const play2 = document.getElementById('play2')
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
play2.addEventListener('click', function(){
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
  
  if(!music2.paused){
    play2.innerHTML = "MUSIC START!";
    music2.pause();
  }else{
    play2.innerHTML = "MUSIC STOP!";
    music2.play();
    music2.loop = true;
  }
});






// 音量ボタン
volumeUp.addEventListener('click', function(){
  const volume = music2.volume;
  if(volume < 1){
    music2.volume = (volume * 10 + 1) / 10;
  }
});
volumeDown.addEventListener('click', function(){
  const volume = music2.volume;
  if(volume > 0){
    music2.volume = (volume * 10 - 1) / 10;
  }
});


// ミュートボタン
mute.addEventListener('click', function(){
  if(music2.muted){
    music2.muted = false;
    mute.innerHTML = '<i class="fas fa-volume-mute">';
    mute.innerHTML = "MUTE ON!"
  }else{
    music2.muted = true;
    mute.innerHTML = '<i class="fas fa-volume-up"></i>';
    mute.innerHTML = "MUTE OFF!"
  }
});

