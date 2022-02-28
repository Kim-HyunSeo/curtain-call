document.querySelector(".thumbnail").addEventListener("click", function () {
    document.querySelector(".thumbnail").style.position = 'absolute';
    document.querySelector(".thumbnail").style.width = '1000px';
    document.querySelector(".thumbnail").style.height = '700px';
    document.querySelector(".thumbnail").style.lineHeight = '700px';
    document.querySelector(".thumbnail").style.transition = '1s'

})

// login form edit

const loginForm = document.querySelector(".loginForm"),
    loginBtn = document.querySelector(".headerLogIn");

const LOGIN_SHOW = "loginShowing";

function loginHandle(event) {
    loginForm.classList.toggle(LOGIN_SHOW);
};

loginBtn.addEventListener("click", loginHandle);