// login form edit

const loginForm = document.querySelector(".loginForm"),
    loginBtn = document.querySelector(".headerLogIn");

const LOGIN_SHOW = "loginShowing";

function loginHandle(event) {
    loginForm.classList.toggle(LOGIN_SHOW);
}

loginBtn.addEventListener("click", loginHandle);
