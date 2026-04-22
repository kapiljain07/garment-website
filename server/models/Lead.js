const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: 100,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: 20,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    maxlength: 100,
  },
  businessType: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  requirement: {
    type: String,
    trim: true,
    maxlength: 200,
  },
  message: {
    type: String,
    trim: true,
    maxlength: 2000,
  },
  source: {
    type: String,
    enum: ['consultation', 'contact', 'demo'],
    default: 'consultation',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Lead', leadSchema);
