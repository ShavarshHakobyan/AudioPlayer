var data ={
    title: [
        "Tamu Tamu Tamuna REMIX",
        "Arkadi Dumikyan-Sarerov Dzorerov",
        "Miyagi-Patron",
        "REINCARNATION-Kancnen Orer",
    ],
    song: [
        "music/Tamuna.mp3",
        "music/Arkadi Dumikyan - Sarerov Dzorerov.mp3",
        "music/Miyagi.mp3",
        "music/Kancnenorer.mp3",
    ],
    poster: [
    "https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=",
    "https://c.tenor.com/t4PPp1jlWtwAAAAd/mountain-cat.gif",
    "https://wallpaperaccess.com/thumb/1222642.jpg",
    "https://static9.depositphotos.com/1605259/1091/i/600/depositphotos_10917011-stock-photo-depression-teen-depression-tunnel-young.jpg",
    
    ]
    
}
var song = new Audio();

window.onload = function(){
    playSong()
}

var currentSong = 0;  

function playSong(){
    song.src = data.song[currentSong];
    console.log(song);
    
    let songTitle = document.getElementById("songTitle");

    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");
    img.style.backgroundImage= "url("+ data.poster[currentSong] +")";

    let main = document.getElementById("main");
    main.style.backgroundImage= "url("+ data.poster[currentSong] +")";
    song.play();


}

function playOrPauseSong(){
    let play = document.getElementById("play")

    if(song.paused){
        song.play();
        play.src ="images/pause.png" //pause
    } else{
        song.pause()
        play.src ="images/play-button-arrowhead.png" //play
    }
}
song.addEventListener("timeupdate", function(){
    // console.log(song.currentTime);
    // console.log(song.duration);
    let fill = document.getElementById("fill");
    // console.log(fill);
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%"; //fill
     convertTime(song.currentTime) // cur. time
     if (song.ended) {
         next()
     }
    
})
function convertTime(seconds){
    let currentTime = document.getElementById("currentTime");
    let min = Math.floor(seconds /60);
    let sec = Math.floor(seconds % 60);
    min = (min<10) ? "0" + min : min;
    sec = (sec<10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;
    totalTime(Math.round(song.duration));
}
function totalTime (seconds){
    var min = Math.floor(seconds /60);
    var sec = Math.floor(seconds % 60);
    min = (min<10) ? "0" + min : min;
    sec = (sec<10) ? "0" + sec : sec;
    if(isNaN(min) || isNaN(sec)){
     return false
    } else{
        
    }
    currentTime.textContent += "/" + min + ":" + sec;
}

function next(){
    currentSong++;
    if(currentSong >= data.song.length){
        currentSong = 0;
    }
    playSong();
    play.src = "images/pause.png"
}

function pre(){
    currentSong--;
    if(currentSong < 0){
        currentSong = data.song.length -1;
    }
    playSong();
    play.src = "images/pause.png"
}
function muted() {
    let mute = document.getElementById("mute");
    if (song.muted) {
        song.muted= false;
        mute.src = "images/volume.png";
    }else{
        song.muted = true;
        mute.src = "images/volume-mute.png";
    }
}
function decrease() {
     song.volume -= 0.2;
}
function increase() {
    song.volume += 0.2;
}