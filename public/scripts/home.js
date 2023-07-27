const button = document.getElementById('hbButton');
const sideNav = document.querySelector('.sideNav');

button.addEventListener('click', () => {
    button.classList.toggle('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'));

    const computedStyle = getComputedStyle(sideNav);
    const leftPosition = computedStyle.getPropertyValue('left');

    if (leftPosition === '-1000px') {
        sideNav.style.left = '0px';
    } else {
        sideNav.style.left = '-1000px';
    }
});

//slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'flex';
    }
}

document.querySelector(".prev").addEventListener("click", function () {
    plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function () {
    plusSlides(1);
});


