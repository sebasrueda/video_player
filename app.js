const video = document.querySelector('#video');
const play = document.querySelector('#play');
const pausa = document.querySelector('#pausa');
const atras = document.querySelector('#atras');
const adelante = document.querySelector('#adelante');

play.addEventListener('click', handlePlay);
pausa.addEventListener('click', handlePause);
atras.addEventListener('click', handleBackward);
adelante.addEventListener('click', handleForward);

function handlePlay()
{
    video.play();
    play.hidden = true;
    pausa.hidden = false;
    console.log('Play');
}

function handlePause()
{
    video.pause();
    pausa.hidden = true;
    play.hidden = false;
    console.log('Pausa');
}

function handleBackward()
{
    video.currentTime = video.currentTime - 10;
    console.log('10 segundos atras', video.currentTime)
}

function handleForward()
{
    video.currentTime = video.currentTime + 10;
    console.log('10 segundos adelante', video.currentTime)
}

const progreso = document.querySelector('#progreso')


video.addEventListener('loadedmetadata', handleLoaded);

function handleLoaded()
{
    progreso.max = video.duration
    console.log("El video ha cargado", video.duration);
}


video.addEventListener('timeupdate', handleTimeUpdate);

function handleTimeUpdate()
{
    progreso.value = video.currentTime
}


progreso.addEventListener('input', handleInput)

function handleInput()
{
    console.log(progreso.value)
    video.currentTime = progreso.value
}