const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// CREATE
router.post('/', async (req, res) => {
    const appt = new Appointment(req.body);
    await appt.save();
    res.json(appt);
});

// READ ALL
router.get('/', async (req, res) => {
    const data = await Appointment.find();
    res.json(data);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const updated = await Appointment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;