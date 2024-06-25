const Form = require('../models/formModel');
const submitForm = async (req, res) => {
  const { formType, formData } = req.body;

  const newForm = new Form({
    formType,
    ...formData,
  });

  try {
    await newForm.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('Error saving form data', err);
    res.status(500).json({ message: 'Failed to submit form' });
  }
};

module.exports = {
  submitForm,
};
