// login form edit

const loginForm = document.querySelector(".loginForm"),
    loginBtn = document.querySelector(".headerLogIn");

const LOGIN_SHOW = "loginShowing";

function loginHandle(event) {
    loginForm.classList.toggle(LOGIN_SHOW);
};

loginBtn.addEventListener("click", loginHandle);

// heart btn edit 

const heartBtn = document.querySelectorAll(".box2_heart")

const HEART_SHOW = "heart_showing";

function heartHandle(event) {
    const btn = event.target;
    btn.classList.toggle(HEART_SHOW);
};

[].forEach.call(heartBtn, function (col) {
    col.addEventListener("click", heartHandle);
});

// write form edit

// const writeButton = document.querySelector('.write'),
//     writeForm = document.querySelector('.actorinput');

// function writeFormControl(event) {
//     if (writeForm.className !== 'showing') {
//         writeForm.classList.remove('actorinput');
//         writeForm.classList.add('showing');
//         writeButton.innerHTML = '<i class="fas fa-times"></i>&nbsp;글쓰기';
//     } else {
//         writeForm.classList.remove('showing');
//         writeForm.classList.add('actorinput');
//         writeButton.innerHTML = '+&nbsp;글쓰기';
//     }
// }

// writeButton.addEventListener("click", writeFormControl);



// window.addEventListener('scroll', function () {
//     var nowscroll = document.documentElement.scrollTop;
//     if (nowscroll > 100) { document.querySelector('#main2_text_line').classList.add('p1') }
//     if (nowscroll > 1600) { document.querySelector('#main3_line').classList.add('p3') }
//     if (nowscroll > 1600) { document.querySelector('#main3_text1').classList.add('p2') }
// })

// document.querySelector(".main_icon_heart").addEventListener("click", function () {
//     document.querySelector(".main_icon_heart_lain").style.display = 'none';
//     document.querySelector(".main_icon_heart_color").style.display = 'block';
// })
// document.querySelector(".main_icon_heart1").addEventListener("click", function () {
//     document.querySelector(".main_icon_heart_lain1").style.display = 'none';
//     document.querySelector(".main_icon_heart_color1").style.display = 'block';
// })
// document.querySelector(".main_icon_heart2").addEventListener("click", function () {
//     document.querySelector(".main_icon_heart_lain2").style.display = 'none';
//     document.querySelector(".main_icon_heart_color2").style.display = 'block';
// })
// document.querySelector(".main_icon_heart3").addEventListener("click", function () {
//     document.querySelector(".main_icon_heart_lain3").style.display = 'none';
//     document.querySelector(".main_icon_heart_color3").style.display = 'block';
// })
// document.querySelector(".main_icon_heart4").addEventListener("click", function () {
//     document.querySelector(".main_icon_heart_lain4").style.display = 'none';
//     document.querySelector(".main_icon_heart_color4").style.display = 'block';
// })
// document.querySelector(".main_icon_heart5").addEventListener("click", function () {
//     document.querySelector(".main_icon_heart_lain5").style.display = 'none';
//     document.querySelector(".main_icon_heart_color5").style.display = 'block';
// })