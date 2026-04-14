const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: { type: String, required: true },
  doctor: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String },
  status: { type: String, default: "Scheduled" },
  reason: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);