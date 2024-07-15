// List of Variables

let songindex = 0;
let audioElemet = new Audio(`Assets/1.mp3`);
let masterplay = document.getElementById(`masterplay`);
let myprogessbar = document.getElementById(`myprogessbar`);
let gif = document.getElementById(`gif`);
let songitems = Array.from(document.getElementsByClassName(`SongItem`));

let songs = [

{songname: "Galava Mafia",filepath: "Assets/1.mp3",coverpath: "Assets/Song 1 Cover.jpg"},

{songname: "Way Down We Go",filepath: "Assets/2.mp3",coverpath: "Assets/Song 2 Cover.jpg"},

{songname: "Polozhenie",filepath: "Assets/3.mp3",coverpath: "Assets/Song 3 Cover.jpg"},

{songname: "Badass Maifa",filepath: "Assets/4.mp3",coverpath: "Assets/Song 4 Cover.jpg"},

{songname: "Sigma Rule",filepath: "Assets/5.mp3",coverpath: "Assets/Song 5 Cover.jpg"},

]

songitems.forEach((Element,i) =>{

Element.getElementsByTagName("img")[0].src = songs[i].coverpath;  

Element.getElementsByClassName("songname")[0].innertext = songs[i].songname;  

})

// audioElemet.play();

// Handleplay and pause click 

masterplay.addEventListener(`click`, ()=>{

if(audioElemet.paused || audioElemet.currentTime<=0){

audioElemet.play();

masterplay.classList.remove(`fa-play-circle`);

masterplay.classList.add(`fa-pause-circle`);

gif.style.opacity = 1;

}

else{

audioElemet.pause();

masterplay.classList.remove(`fa-pause-circle`);
    
masterplay.classList.add(`fa-play-circle`);    

gif.style.opacity = 0;

}

} )

// Listen to Events

audioElemet.addEventListener(`timeupdate`, ()=>{

//Upadte Seekbar 

progress = parseInt((audioElemet.currentTime/audioElemet.duration)* 100);

myprogessbar.value = progress;

} )

myprogessbar.addEventListener(`change`, ()=>{

audioElemet.currentTime = myprogessbar.value*audioElemet.duration/100;

})

const makeallplay = ()=>{

Array.from(document.getElementsByClassName(`songplay`)).forEach((element)=>{

element.target.classList.add(`fa-pause-circle`);

element.target.classList.remove(`fa-play-circle`);



})



}



Array.from(document.getElementsByClassName(`songplay`)).forEach((element)=>{

element.addEventListener(`click`, (e)=>{

console.log(e.target);

makeallplay();

e.target.classList.remove(`fa-play-circle`);

e.target.classList.add(`fa-pause-circle`);

})



})
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}



