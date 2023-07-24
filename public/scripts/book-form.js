document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const customer = document.querySelector('.customer').value;
    const email = document.querySelector('.email').value;
    const phone = document.querySelector('.phone').value;
    const apptype = document.querySelector('.apptype').value;
    const date = document.getElementById('date').value;
    console.log('test');
    const time = document.getElementById('time').value;

    const data = {
        customer,
        email,
        phone,
        apptype,
        date,
        time,
    };

    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
        })
        .catch((error) => {
            console.error(error);
            //
        });
});
