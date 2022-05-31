function calc(ele) {
    let size = ele.dataset.size;
    let count = setInterval(() => {
        ele.textContent++;
        if (size == ele.textContent) {
            clearInterval(count);
        }
    }, 1000 / size);
}


let sizes = document.querySelectorAll('h1[data-size]');
let stats = document.querySelector('.stats');
let bool = false;
let skills = document.querySelector('.skills');
let pros = skills.querySelectorAll('.bk span');

window.onscroll = () => {
    if (window.scrollY >= stats.offsetTop) {
        if (bool == false) {
            sizes.forEach(ele => {
                calc(ele);
            });
            bool = true;
        }
    }

    if (window.scrollY >= skills.offsetTop) {
        pros.forEach(ele => {
            ele.style.width = ele.dataset.pro;
        });
    }
}

let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let lastOfTheYear = new Date(2022, 11, 31, 23, 59, 59).getTime();

let count = setInterval(() => {
    let now = new Date().getTime();
    let def = lastOfTheYear - now;
    let day = Math.floor(def / 1000 / 60 / 60 / 24);
    let hour = Math.floor(def % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
    let minute = Math.floor(def % (1000 * 60 * 60) / 1000 / 60);
    let second = Math.floor(def % (1000 * 60) / 1000);
    days.textContent = day < 10 ? '0' + day : day;
    hours.textContent = hour < 10 ? '0' + hour : hour;
    minutes.textContent = minute < 10 ? '0' + minute : minute;
    seconds.textContent = second < 10 ? '0' + second : second;
    if (def == 0) {
        clearInterval(count);
    }
}, 1000)