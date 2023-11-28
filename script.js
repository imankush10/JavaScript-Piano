const keys = document.querySelectorAll('.key');
const white = ['z','x','c','v','b','n','m'];
const black = ['s','d','g','h','j']

const whiteKey = document.querySelectorAll('.key-white')
const blackKey = document.querySelectorAll('.key-black')

keys.forEach(key=>{
    key.addEventListener('click',()=>playAudio(key))
})

function playAudio(key){
    const audio = document.getElementById(key.dataset.note);
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();
    audio.addEventListener('ended', ()=>{
        key.classList.remove('active')
    })
}

document.addEventListener('keydown', e=>{
    if(e.repeat) return;
    const whiteKeyIndex = white.indexOf(e.key.toLowerCase());
    const blackKeyIndex = black.indexOf(e.key.toLowerCase());

    if(whiteKeyIndex>-1) playAudio(whiteKey[whiteKeyIndex]);
    if(blackKeyIndex>-1) playAudio(blackKey[blackKeyIndex]);
 })