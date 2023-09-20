import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LS_KEY = 'videoplayer-current-time';

const onPlay = function (evt) {
  //   console.log(evt.seconds);
  const currentTime = evt.seconds;
  localStorage.setItem(LS_KEY, JSON.stringify(currentTime));
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = JSON.parse(localStorage.getItem(LS_KEY));
// console.log(savedTime);

player.setCurrentTime(savedTime);
