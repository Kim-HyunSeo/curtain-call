// login form edit

const loginForm = document.querySelector(".loginForm"),
    loginBtn = document.querySelector(".headerLogIn");

const LOGIN_SHOW = "loginShowing";

function loginHandle(event) {
    loginForm.classList.toggle(LOGIN_SHOW);
};

loginBtn.addEventListener("click", loginHandle);

// write form edit

const writeButton = document.querySelector('.write'),
    writeForm = document.querySelector('.actorinput');

function writeFormControl(event) {
    if (writeForm.className !== 'showing') {
        writeForm.classList.remove('actorinput');
        writeForm.classList.add('showing');
        writeButton.innerHTML = '<i class="fas fa-times"></i>&nbsp;글쓰기';
    } else {
        writeForm.classList.remove('showing');
        writeForm.classList.add('actorinput');
        writeButton.innerHTML = '+&nbsp;글쓰기';
    }
}

writeButton.addEventListener("click", writeFormControl);

// carousel edit

const body = document.querySelector("body"),
    carousel = document.querySelector(".carousel"),
    carouselItem = document.querySelector(".carouselItem"),
    carouselBtn1 = document.querySelector(".carouselbtn1"),
    carouselBtn2 = document.querySelector(".carouselbtn2"),
    carouselBtn3 = document.querySelector(".carouselbtn3");

let Width = body.offsetWidth,
    p = 0

function resize(event) {
    Width = body.offsetWidth;
    carousel.style.width = `${Width * 3}px`;
    carouselItem.style.width = `${Width}px`;
    carousel.style.transform = `translateX(0px)`;
};

function slideHandle(event) {
    if (-(Width * 2) < p) {
        p = p - Width;
    } else {
        p = 0;
    }
    carousel.style.transform = `translateX(${p}px)`;
    buttonColor();
};

function buttonColor() {
    if (carousel.style.transform == `translateX(0px)`) {
        carouselBtn1.style.backgroundColor = `red`;
        carouselBtn2.style.backgroundColor = `#EFEFEF`;
        carouselBtn3.style.backgroundColor = `#EFEFEF`;
    } else if (carousel.style.transform == `translateX(${-(Width)}px)`) {
        carouselBtn1.style.backgroundColor = `#EFEFEF`;
        carouselBtn2.style.backgroundColor = `red`;
        carouselBtn3.style.backgroundColor = `#EFEFEF`;
    } else if (carousel.style.transform == `translateX(${-(Width * 2)}px)`) {
        carouselBtn1.style.backgroundColor = `#EFEFEF`;
        carouselBtn2.style.backgroundColor = `#EFEFEF`;
        carouselBtn3.style.backgroundColor = `red`;
    };
};

const btnHandler = {
    btn1: function btn1(event) {
        carousel.style.transform = `translateX(0px)`;
        buttonColor();
    }, btn2: function btn2(event) {
        carousel.style.transform = `translateX(${-(Width)}px)`;
        buttonColor();
    }, btn3: function btn3(event) {
        carousel.style.transform = `translateX(${-(Width * 2)}px)`;
        buttonColor();
    }
};

carouselBtn1.addEventListener("click", btnHandler.btn1);
carouselBtn2.addEventListener("click", btnHandler.btn2);
carouselBtn3.addEventListener("click", btnHandler.btn3);

window.addEventListener("resize", resize);
carousel.addEventListener("click", slideHandle);
carouselBtn1.style.backgroundColor = `red`;