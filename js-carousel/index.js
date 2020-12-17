// variable grabs
const prev = document.getElementsByClassName('previous')[0];
const next = document.getElementsByClassName('next')[0];
const gallery = document.getElementsByClassName('gallery')[0];
let pictArr = gallery.children;
let current = 0;
let translate = -220;


// animate the frames

next.addEventListener('click', ()=> {
    if (current < pictArr.length-1) {
        // toggle off the current class on the current idx
        pictArr[current].classList.toggle('current');
        current++;
        gallery.style.transform = `translateX(${ translate * current }px)`;
        pictArr[current].classList.toggle('current');
        if (current === 1) {
            prev.classList.toggle('faded');
        }
        if (current === pictArr.length-1) {
            next.classList.toggle('faded');
        }
    }
})

prev.addEventListener('click', ()=> {
    if (current > 0) {
        pictArr[current].classList.toggle('current');
        current--;
        gallery.style.transform = `translateX(${ translate * current }px)`;
        pictArr[current].classList.toggle('current');
        if (current === pictArr.length-2) {
            next.classList.toggle('faded');
        }
        if (current === 0) {
            prev.classList.toggle('faded');
        }
    }
})
