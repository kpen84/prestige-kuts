
//sidenav

function openNav() {
   document.getElementById("mySidenav").style.left = "0";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.left = "-1000px";
  }

//  let viewMode = getCookie("view-mode");

//if(viewMode == "desktop"){

//    viewport.setAttribute('content', 'width=1024');

//}else if (viewMode == "mobile"){

  //  viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');

//}

// Slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active",);
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

//HTML Form Submission

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const barber = document.querySelector('.barber').value;
    const customer = document.querySelector('.customer').value;
    const apptype = document.querySelector('.apptype').value;
    const email = document.querySelector('.email').value;
    const date = document.getElementById('date').value;

    const data = {
        barber,
        customer,
        apptype,
        email,
        date
    };

    fetch('/api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointments)
    })
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData);
        // Handle the response from the server
    })
    .catch(error => {
        console.error(error);
        // Handle any errors
    });
});



