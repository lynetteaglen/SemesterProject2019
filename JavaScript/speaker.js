let speaker = document.getElementById('speaker-btn');
speaker.addEventListener('click', controllAudio);



function controllAudio() {
    let audio = document.getElementById('audio');

    if (audio.paused) {
        audio.play();
        speaker.innerHTML = 'Sound &nbsp; on'

    } else {
        audio.pause();
        speaker.innerHTML = 'Sound &nbsp; off'
    }
}