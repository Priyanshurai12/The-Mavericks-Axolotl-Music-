console.log("Welcome to Axolotl");

let songIndex = 0;
let audioElement = new Audio('songs/Sunflower (Spider-Man_ Into the Spider-Verse)(PagalWorld).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Sunflower-Post_Malone", filePath: "songs/Sunflower (Spider-Man_ Into the Spider-Verse)(PagalWorld).mp3", coverPath: "banner/Sunflower-Post_Malone.jpg"},
    {songName: "All too well-Taylor_swift", filePath: "songs/Taylor-Swift-All-Too-Well-Taylors-Version.mp3", coverPath: "banner/All too well-Taylor_swift.jpg"},
    {songName: "Eastside-Benny_Blanco", filePath: "songs/Benny-Blanco-Eastside.mp3", coverPath: "banner/Eastside-Benny_Blanco.jpg"},
    {songName: "Without me-Eminem", filePath: "songs/Without Me - Eminem 320(PagalWorld).mp3", coverPath: "banner/Without me-Halsey.jpg"},
    {songName: "Back_To_You-Selena Gomez", filePath: "songs/Selena-Gomez-Back-To-You.mp3", coverPath: "banner/Back_To_You-Selena Gomez.jpg"},
    {songName: "Lily-Alan walker_K-391", filePath: "songs/Lily(PaglaSongs).mp3", coverPath: "banner/Lily-Alan walker_K-391.jpg"},
    {songName: "Mockingbird Encore- Eminem", filePath: "songs/Mockingbird(PaglaSongs).mp3", coverPath: "banner/Mockingbird Encore- Eminem.jpg"},
    {songName: "Dzanum-Teya Dora", filePath: "songs/Dzanum-(PagalWorld).mp3", coverPath: "banner/Dzanum-Teya Dora.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 


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

audioElement.addEventListener('timeupdate', ()=>{ 
    
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
    if(songIndex>=7){
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