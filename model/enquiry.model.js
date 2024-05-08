const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true },
  destination: { type: String, required: true },
  interest: { type: String, required: true },
  duration: { type: Number, required: true },
  travelDate: { type: Date, required: true },
  numberOfTravelers: { type: Number, required: true },
  comment: { type: String },
  userId: { type: String }
}, { timestamps: true, versionKey: false });

const enquiryModel = mongoose.model('enquirie', enquirySchema);
module.exports = enquiryModel;
