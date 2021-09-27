window.addEventListener('scroll', function () {
    var nowscroll = document.documentElement.scrollTop;
    if (nowscroll > 80) { document.querySelector('#main2_text1').classList.add('p2') }
    if (nowscroll > 80) { document.querySelector('#main2_text2').classList.add('p3') }
})

// login form edit

const loginForm = document.querySelector(".loginForm"),
    loginBtn = document.querySelector(".headerLogIn");

const LOGIN_SHOW = "loginShowing";

function loginHandle(event) {
    loginForm.classList.toggle(LOGIN_SHOW);
};

loginBtn.addEventListener("click", loginHandle);