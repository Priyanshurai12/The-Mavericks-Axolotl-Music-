console.log("Welcome to Axolotl");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Satranga Animal 128 Kbps.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Satranga- Arijit Singh", filePath: "songs/Satranga Animal 128 Kbps.mp3", coverPath: "banner/Satranga- Arijit Singh.jpg"},
    {songName: "Chaleya- Arijit Singh", filePath: "songs/Chaleya(PagalWorld.com.pe).mp3", coverPath: "banner/Chaleya- Arijit Singh.jpg"},
    {songName: "Jeetenge- B Praak", filePath: "songs/Jeetenge(PagalWorld.com.pe).mp3", coverPath: "banner/Jeetenge- B Praak.jpg"},
    {songName: "Kesariya- Arijit Singh", filePath: "songs/Kesariya(PagalWorld.com.pe).mp3", coverPath: "banner/Kesariya- Arijit Singh.jpg"},
    {songName: "Mere Sawaal Ka- Pritam", filePath: "songs/Mere Sawaal Ka Shehzada 128 Kbps.mp3", coverPath: "banner/Mere Sawaal Ka- Pritam.jpg"},
    {songName: "Dil Jhoom- Arijit Singh", filePath: "songs/Dil-Jhoom(PagalWorlld.Com).mp3", coverPath: "banner/Dil Jhoom- Arijit Singh.jpg"},
    {songName: "Rabb Manneya- Lakhwinder Wadali", filePath: "songs/Rabb Manneya Koi Jaane Na 128 Kbps.mp3", coverPath: "banner/Rabb Manneya- Lakhwinder Wadali.jpg"},
    {songName: "Malang Sajna- Sachet Tondon", filePath: "songs/Malang Sajna(PagalWorld.com.pe).mp3", coverPath: "banner/Malang Sajna- Sachet Tondon.jpg"},
    {songName: "Apna Bana Le- Arijit Singh", filePath: "songs/Apna-Bana-Le(PagalWorld).mp3", coverPath: "banner/Apna Bana Le- Arijit Singh.jpg"},
    {songName: "Dil Diyan Gallan- Atif Aslam", filePath: "songs/Dil Diyan Gallan Tiger Zinda Hai 128 Kbps.mp3", coverPath: "banner/Dil Diyan Gallan- Atif Aslam.jpg"},
    {songName: "Tere Hawale- Arijit Singh", filePath: "songs/Tere Hawaale(PagalWorld.com.pe).mp3", coverPath: "banner/Tere Hawale- Arijit Singh.jpg"},
    {songName: "Maahi- Vishal Pande", filePath: "songs/Maahi_Madhur_Sharma.mp3", coverPath: "banner/Maahi- Vishal Pande.jpg"},
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
    if(songIndex>=11){
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