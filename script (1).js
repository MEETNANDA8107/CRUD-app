const form = document.getElementById('appointment-form');
const appointmentList = document.getElementById('appointment-list');
const cancelBtn = document.getElementById('cancel-edit');

let appointments = [];

fetchAppointments();
let editId = null;

// RENDER (Read)
async function fetchAppointments() {
    const res = await fetch('http://localhost:5000/api/appointments');
    appointments = await res.json();
    render();
}

// CREATE / UPDATE
await fetch('http://localhost:5000/api/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appt)
});

// DELETE
await fetch(`http://localhost:5000/api/appointments/${id}`, {
    method: 'DELETE'
});

// EDIT (Load data into form)
window.editAppointment = (id) => {
    const app = appointments.find(a => a.id === id);
    document.getElementById('patient-name').value = app.patient;
    document.getElementById('doctor-name').value = app.doctor;
    document.getElementById('appointment-date').value = app.date;
    document.getElementById('status').value = app.status;
    document.getElementById('reason').value = app.reason;
    
    editId = id;
    document.getElementById('form-title').innerText = "Update Appointment";
    cancelBtn.classList.remove('btn-hidden');
};

renderAppointments();