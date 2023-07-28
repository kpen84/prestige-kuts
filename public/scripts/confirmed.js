const button = document.getElementById('hbButton');
const sideNav = document.querySelector('.sideNav');

button.addEventListener('click', () => {
    button.classList.toggle('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'));

    const computedStyle = getComputedStyle(sideNav);
    const leftPosition = computedStyle.getPropertyValue('left');

    if (leftPosition === '-1500px') {
        sideNav.style.left = '0px';
    } else {
        sideNav.style.left = '-1500px';
    }
});
