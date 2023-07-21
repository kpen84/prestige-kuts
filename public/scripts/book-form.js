document.getElementById('bookingForm').addEventListener('submit', function (event) {
    console.log('looking for event');
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
        date,
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
