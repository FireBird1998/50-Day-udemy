const loveme = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;

loveme.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime();//getting the inbuilt date object.
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    
    }
});


const createHeart = (e) => {
    
    const x = e.clientX; //getting mouse position from the evenet objec.
    const y = e.clientY; //getting mouse position from the evenet objec.
    const lovemeTop = loveme.offsetTop; //getting the position of the element
    
    const lovemeLeft = loveme.offsetLeft;//getting the position of the element
    const xInside = x - lovemeLeft; // making relative to the element
    const yInside = y - lovemeTop; // making relative to the element

    // console.log('xInside:', xInside);
    // console.log('yInside:', yInside);
    // console.log('x:', x);
    // console.log('y:', y);
    
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;
    loveme.appendChild(heart);
    times.innerHTML = ++times.innerHTML;

    setTimeout(() => heart.remove(), 1000);

}
