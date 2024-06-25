const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  formType: String,
  username: String,
  email: String,
  mobile: String,
  designation: String,
  organisation: String,
  location: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
},
);

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
