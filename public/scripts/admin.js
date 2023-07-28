// function appendAppointmentToContainer(appointment) {
//   const appointmentsContainer = document.getElementById('appointments-container');

//   const appointmentElement = document.createElement('div');
//   appointmentElement.classList.add('appointment');

//   appointmentElement.innerHTML = `
//     <p>Customer: ${appointment.customer}</p>
//     <p>Email: ${appointment.email}</p>
//     <p>Phone: ${appointment.phone}</p>
//     <p>Appointment Type: ${appointment.apptype}</p>
//     <p>Date: ${new Date(appointment.date).toLocaleDateString()}</p>
//     <p>Time: ${appointment.time}</p>
//   `;

//   appointmentsContainer.appendChild(appointmentElement);
// }

// async function displayAppointments() {
//   try {
//     const response = await fetch('/getAll'); // Assuming your server is running on the same domain
//     const data = await response.json();

//     data.forEach((appointment) => {
//       appendAppointmentToContainer(appointment);
//     });
//   } catch (error) {
//     console.error('Error fetching appointments:', error);
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   displayAppointments();
// });