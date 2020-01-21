const WHITE_KEYS = ['z', 'x','c','v','b','n','m'];
const black_keys = ['s','d','g','h','j'];
const keys = document.querySelectorAll('.key');
const  whitekeys = document.querySelectorAll('.key.white');
const blackkeys   = document.querySelectorAll('.key.black');
// console.log(blackkeys);

keys.forEach(key => {
    key.addEventListener('click', () => onPlaySound(key));
})

document.addEventListener('keyup', u => {
    const getKeyboard = u.key;
    const blackkeyIndex = black_keys.indexOf(getKeyboard);
    if(blackkeyIndex > -1) {
        onPlaySound(blackkeys[blackkeyIndex]);
    }
})

document.addEventListener('keydown', e => {
    const getKeyboard = e.key;
    const whitekeyIndex = WHITE_KEYS.indexOf(getKeyboard);
    if(whitekeyIndex > -1) {
        onPlaySound(whitekeys[whitekeyIndex]);
    }
    // document.querySelector('button').innerHTML = getKeyboard;
})

function onPlaySound(key) {
    const audiokey = document.getElementById(key.dataset.note);
    audiokey.play();
    audiokey.correntTime = 0;
    console.log(key)
    key.classList.add('active');
    audiokey.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}
