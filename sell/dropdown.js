function disableScroll() {
    scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft,
        window.onscroll = function () {
            window.scrollTo(scrollTop,scrollLeft);
        };
}
let photo_section = document.getElementsByClassName('photo');
let left_div = document.getElementsByClassName('left');
let right_div = document.getElementsByClassName("right");
// const f3 = document.getElementById('f3');
let nextup = document.getElementById('nextup');
// const nextdown = document.getElementById('nextdown');
const register_div = document.getElementsByClassName('register');
const reg_div = document.getElementsByClassName('reg');

// register_div.style.height="0vh";
// reg_div.style.display="none";
nextup.addEventListener('click',()=>{
    right_div.style.height="none";
    left_div.style.height="none";
    photo_section.style.height="none";

    reg_div.style.display="flex";
    register_div.style.height="100vh";
    
})


// const sec1 = document.getElementsByClassName("photo");

// const left_div= document.getElementsByClassName("left");

// const right_div=document.getElementsByClassName("right");

// const sec2 = document.getElementsByClassName("register");

// const reg_div=document.getElementsByClassName("reg");

// const butt = document.getElementById("nextup");

// sec2.style.display="none";
// reg_div.style.display="none";

// butt.addEventListener(
//     'click', 
//     () => {
//         sec1.style.display="none";
//         left_div.style.display="none";
//         right_div.style.display="none";
//     }
// );


