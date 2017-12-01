window.onload = init;

function init() {
    createArrows();
}

function createArrows() {
    const gallery = document.querySelector('.gallery');
    const arrows = [document.createElement('div'), document.createElement('div')]
    arrows[0].classList.add('arrow','arrow__left');
    arrows[1].classList.add('arrow','arrow__right');
    addEvents(arrows);
    arrows.forEach(element => {
        gallery.appendChild(element);
    });

}

function addEvents(arrows) {
    const img = iterator(getImages());
    arrows[0].addEventListener('click', () =>{
        prev(img);
    });
    arrows[1].addEventListener('click', () =>{
        next(img);
        });
}

function getImages() {
    return document.querySelectorAll('img.gallery__image');
}

const iterator = function (img) {
    let pos = 0;
    img.next = (function () {
        return (pos++ >= this.length -1) ? false : this[pos];
    });
    img.prev = (function () {
        return (pos-- <= 1) ? false : this[pos];
    });
    return img;
};

function prev(img) {
    const actualImg = img.prev();
    actualImg.classList.remove('hidden');
    img.forEach(element => {
        if(element != actualImg)
            element.classList.add('hidden');
    });
}
function next(img) {
    const actualImg = img.next();
    actualImg.classList.remove('hidden');
    img.forEach(element => {
        if(element != actualImg)
            element.classList.add('hidden');
    });
}

function reveal(pos, next) {
    if(next){
        img[pos--].classList.add('hidden');
        img[pos].classList.remove('hidden');
    }else{
        img[pos].classList.add('hidden');
        img[pos++].classList.remove('hidden');
    }
}



