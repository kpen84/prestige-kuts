const button = document.getElementById('hbButton');
const sideNav = document.querySelector('.sideNav');

button.addEventListener('click', () => {
    // Toggle the 'opened' class and set 'aria-expanded' attribute
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

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        if (!slides[i]) return;
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active');
    }
    if (!slides[slideIndex - 1]) return;
    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].className += 'active';
}
