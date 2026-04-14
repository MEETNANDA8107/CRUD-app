const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  contactNumber: { type: String, required: true },
  bloodGroup: { type: String },
  address: { type: String },
  medicalHistory: [{ type: String }] // Array of past conditions
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number }, // in years
  contactNumber: { type: String, required: true },
  email: { type: String, unique: true },
  availableDays: [{ type: String }], // e.g., ['Monday', 'Wednesday']
  consultationFee: { type: Number }
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);
const appointmentSchema = new mongoose.Schema({
  patient: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Patient', 
    required: true 
  },
  doctor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Doctor', 
    required: true 
  },
  appointmentDate: { type: Date, required: true },
  status: { 
    type: String, 
    enum: ['Scheduled', 'Completed', 'Cancelled'], 
    default: 'Scheduled' 
  },
  reasonForVisit: { type: String },
  notes: { type: String }
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);