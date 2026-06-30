const express = require('express');
const router = express.Router();
const Contact = require('../model/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, serviceInterest, message } = req.body;

    if (!name || !email || !serviceInterest || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const contact = new Contact({ name, email, serviceInterest, message });
    await contact.save();

    res.status(201).json({ message: 'Contact saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error saving contact.' });
  }
});

module.exports = router;
