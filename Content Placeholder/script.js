const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const aname = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getDate, 2500);


function getDate() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1696613036445-0233b0b410fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80" alt="">`;

    title.innerHTML = `Lorem ipsum dolor sit amet`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.`;

    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/35.jpg" alt="">`;

    aname.innerHTML = `John Doe`;
    date.innerHTML = `Oct 08, 2023`;


    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}


