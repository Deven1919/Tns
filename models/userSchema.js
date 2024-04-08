const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
 name: {
  type: String,
  unique: true,
  required: [true, 'Name is required'],
  trim: true,
  maxLength: [40],
  minLength: 4,
 },
 email: {
  type: String,
  unique: true,
  required: [true, 'Please enter your Email'],
  validate: [validator.isEmail, 'Enter the valid email ID'],
  lowercase: true,
 },
 password: {
  type: String,
  select: false,
  required: [true, 'Password is required'],
  minLength: [8],
 },
 createdAt: {
  type: Date,
  default: Date,
 },
 updateAt: {
  type: Date,
  default: Date,
 },
});

// userSchema.post(/^find/, function () {
//  if (this.updateAt) {
//   this.set({ updatedAt: new Date().toISOString() });
//   console.log('middleware');
//  }
// });
// userSchema.pre('save', function (next) {
//  if (this.updateAt) this.set({ updateAt: null });

//  console.log('save');
//  return next();
// });

const User = mongoose.model('User', userSchema);
module.exports = User;
