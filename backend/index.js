// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 5000;

// require('dotenv').config(); // Load environment variables from .env file

// app.use(cors());
// app.use(bodyParser.json());


// const mongoURI = process.env.MONGODB_URI;
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => {
//   console.error('Error connecting to MongoDB', err);
// });

// // Define a schema
// const formSchema = new mongoose.Schema({
//   formType: String,
//   username: String,
//   email: String,
//   mobile: String,
//   designation: String,
//   organisation: String,
//   location: String,
// });

// // Create a model
// const Form = mongoose.model('Form', formSchema);

// // Route to handle form submissions
// app.post('/submit', async (req, res) => {
//   const { formType, formData } = req.body;

//   // Create a new form document
//   const newForm = new Form({
//     formType,
//     ...formData,
//   });

//   try {
//     // Save the form data to MongoDB
//     await newForm.save();
//     res.status(200).json({ message: 'Form submitted successfully!' });
//   } catch (err) {
//     console.error('Error saving form data', err);
//     res.status(500).json({ message: 'Failed to submit form' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const nodemailer = require('nodemailer');
// require('dotenv').config(); // Load environment variables from .env file

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// const mongoURI = process.env.MONGODB_URI;
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => {
//   console.error('Error connecting to MongoDB', err);
// });

// // Define a schema
// const formSchema = new mongoose.Schema({
//   formType: String,
//   username: String,
//   email: String,
//   mobile: String,
//   designation: String,
//   organisation: String,
//   location: String,
// });

// // Create a model
// const Form = mongoose.model('Form', formSchema);

// // Nodemailer transporter setup
// // const transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASS,
// //   },
// // });

// // Route to handle form submissions
// app.post('/submit', async (req, res) => {
//   const { formType, formData } = req.body;

//   // Create a new form document
//   const newForm = new Form({
//     formType,
//     ...formData,
//   });

//   try {
//     // Save the form data to MongoDB
//     await newForm.save();

//     // Send email to user
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: formData.email, // Fetch email from form data
//       subject: 'Form Submission Confirmation',
//       text: 'Your form has been submitted successfully.',
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: 'Form submitted successfully!' });
//   } catch (err) {
//     console.error('Error saving form data or sending email', err);
//     res.status(500).json({ message: 'Failed to submit form' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db/db');
const auth = require('./middleware/auth');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const createBlogRouter=require('./routes/blogsRoute')
app.use('/api',createBlogRouter)

const UserRoutes = require('./routes/sign-loginRoute');
app.use('/api', UserRoutes);


const formRoutes = require('./routes/formRoutes');
app.use('/api', formRoutes);

app.get('/protected', auth, (req, res) => {
  res.send('This is a protected route');
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
