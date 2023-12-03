console.log("Welcome to Axolotyl");

let songIndex = 0;
let audioElement = new Audio('songs/Suzume-No-Tojimari-Title-Track(PaglaSongs).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Weathering With You- RADWIMPS_OST", filePath: "songs/Weathering With You & your name OST Theme Songs Full Original Version (128 kbps).mp3", coverPath: "banner/Weathering With You- RADWIMPS_OST.jpg"},
    {songName: "Your Name- Sparkle", filePath: "songs/Sparkle-Your-Name.mp3", coverPath: "banner/Your Name- Sparkle.jpg"},
    {songName: "Suzume No Tojimari- Theme", filePath: "songs/Suzume-No-Tojimari-Title-Track(PaglaSongs).mp3", coverPath: "banner/Suzume No Tojimari- Theme.jpg"},
    {songName: "Naruto- Blue Bird", filePath: "songs/Naruto-Blue-Bird.mp3", coverPath: "banner/Naruto- Blue Bird.jpg"},
    {songName: "DeathNote- L's Theme", filePath: "songs/l_theme_death_note.mp3", coverPath: "banner/DeathNote- L's Theme.jpg"},
    {songName: "Demon Slayer- Theme", filePath: "songs/Demon-Slayer (1).mp3", coverPath: "banner/Demon Slayer- Theme.jpg"},
    {songName: "Attack On Titan- Theme", filePath: "songs/Attack on Titan - Opening 2 - Full.mp3", coverPath: "banner/Attack On Titan- Theme.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
