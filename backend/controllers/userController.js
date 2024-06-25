const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
// const nodemailer = require('nodemailer');
require('dotenv').config();

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({
      username,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });

  } catch (error) {
    console.error('Error in sign up', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;

      // Send login email
      sendLoginEmail(user.email, user.username);

      res.json({ token });
    });

  } catch (error) {
    console.error('Error in login', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// const sendLoginEmail = (email, username) => {
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for 587
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS
//     }
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Welcome to Neev',
//     text: `Hi ${username},\n\nWelcome to Neev! You have successfully logged in.\n\nBest Regards,\nThe Neev Team`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log('Error sending email:', error);
//     }
//     console.log('Email sent:', info.response);
//   });
// };