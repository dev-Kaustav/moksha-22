const text = document.getElementById('text');
const bg3 = document.getElementById('Layer1');
const bg = document.getElementById('Layer2');
const bg2 = document.getElementById('Layer3');
window.addEventListener('scroll', function () {
    let value = this.window.scrollY;
    bg.style.top = value * 1 + 'px';
    bg2.style.top = value * 0.7 + 'px';
    bg3.style.top = value * 0.1 + 'px';
    text.style.top = value * 0.4 + 'px';
})

let object = document.getElementById("logoImg")
let object2 = document.getElementById("logoImg2")
const object3 = document.getElementById("logoImg3")

window.addEventListener("scroll", function () {
    if (window.innerWidth > 680) {
        if (window.scrollY >= 100) {
            object.classList.add('hidden');
            object2.classList.remove('hidden');
        }
        else {
            object2.classList.add('hidden');
            object.classList.remove('hidden');
        }
    }
});


const menuIcon = document.querySelector('.hamburgerMenu');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})
window.onload = () => {
    if (window.innerWidth > 680) {
        container.classList.add('noCollapse');
        container.classList.remove('collapse');
        navbar.classList.remove('change');
        object3.classList.add('hidden');
        if (window.scrollY >= 100) {
            object.classList.add('hidden');
            object2.classList.remove('hidden');
            console.log(1);
        } else {
            object2.classList.add('hidden');
            object.classList.remove('hidden');
            console.log(2);
        }
    } else {
        container.classList.add('collapse');
        container.classList.remove('noCollapse');
        object.classList.add('hidden');
        object2.classList.add('hidden');
        object3.classList.remove('hidden');
    }
}
const container = document.querySelector('.container');
window.addEventListener('resize', () => {
    if (window.innerWidth > 680) {
        container.classList.add('noCollapse');
        container.classList.remove('collapse');
        navbar.classList.remove('change');
        object2.classList.add('hidden');
        object.classList.add('hidden');
        object3.classList.add('hidden');
        if (window.scrollY >= 100) {
            object.classList.add('hidden');
            object2.classList.remove('hidden');
            console.log(1);
        } else {
            object2.classList.add('hidden');
            object.classList.remove('hidden');
            console.log(2);
        }
    } else {
        container.classList.add('collapse');
        container.classList.remove('noCollapse');
        object.classList.add('hidden');
        object2.classList.add('hidden');
        object3.classList.remove('hidden');
    }
})



// Loader
const loader = document.querySelector(".animation-wapper");

setTimeout(() => {
  loader.classList.add("hidden2");
}, 5001);
