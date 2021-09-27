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