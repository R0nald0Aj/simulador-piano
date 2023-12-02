const pianoKeys = document.querySelectorAll(".piano-keys .key")
const src ="./assets/tunes/"
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input");
let mappedKeys = [];

let auudio =new Audio();

let playTune = (key)=>{
    auudio.src =`${src}${key}.wav`;
    auudio.play()
    
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
      clickedKey.classList.add("active");
      setTimeout(()=>{
        clickedKey.classList.remove("active");
      },150)
} 
pianoKeys.forEach((key) =>{
    key.addEventListener("click", () => playTune(key.dataset.key))
    mappedKeys.push(key.dataset.key);
});



document.addEventListener("keydown",(e) =>{
    if(mappedKeys.includes(e.key)){
        console.log(` key ${e.key}`)
        playTune(e.key);
    }
});

const handleVolume = (e)=>{
    auudio.volume = e.target.value
}

const showHidekeys = ()=>{
    pianoKeys.forEach((key) =>{
      console.log(key)
      key.classList.toggle("hide");
    });
}
volumeSlider.addEventListener("input",handleVolume)

keysCheck.addEventListener("click", showHidekeys);