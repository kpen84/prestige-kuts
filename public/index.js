
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

  // Send the data to the server using POST method
  fetch('/api/post', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
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



