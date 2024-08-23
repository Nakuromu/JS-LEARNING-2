import Player from '@vimeo/player';
import throttle from 'lodash.throttle';	

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const videoTime = "videoplayer-current-time";

const check = () =>{
    if(localStorage.getItem(videoTime) !== null){
        return localStorage.getItem(videoTime);
    }

    return 0;
}

currentTime = check();
player.setCurrentTime(currentTime);

player.on('timeupdate', throttle(setCurrentTime, 1000))

function setCurrentTime (value) {
    localStorage.setItem(videoTime, value.seconds);
}
