const User = require('../models/userSchema');

exports.createUser = async (req, res, next) => {
 try {
  const user = await User.create({
   name: req.body.name,
   email: req.body.email,
   password: req.body.password,
  });
  res.status(200).json({
   status: 'success',
   data: {
    user,
   },
  });
 } catch (err) {
  res.status(404).json({
   status: 'F',
   message: err.message,
  });
  next();
 }

 next();
};
exports.getAllUser = async (req, res, next) => {
 try {
  const user = await User.find();

  res.status(200).json({
   results: user.length,
   status: 'Success',
   data: {
    user,
   },
  });
 } catch (err) {
  res.status(404).json({
   status: 'F',
   message: err.message,
  });
 }
};
exports.getUserById = async (req, res, next) => {
 try {
  const user = await User.findById({ _id: req.params.id });

  res.status(200).json({
   results: user.length,
   status: 'Success',
   data: {
    user,
   },
  });
 } catch (err) {
  res.status(404).json({
   status: 'F',
   message: err.message,
  });
 }
};

exports.updateUser = async (req, res, next) => {
 try {
  const id = req.params.id;
  const user = await User.findOneAndUpdate({ _id: id }, req.body, {
   new: true,
   runValidators: true,
  });

  res.status(200).json({
   status: 'success',
   data: {
    user,
   },
  });
 } catch (err) {
  res.status(404).json({
   status: 'F',
   message: err.message,
  });
 }
};

exports.deleteOne = async (req, res, next) => {
 try {
  const user = await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
   status: 'success',
  });
 } catch (err) {
  res.status(404).json({
   status: 'F',
   message: err.message,
  });
 }
};

exports.deleteAll = async (req, res, next) => {
 try {
  const user = await User.deleteMany();

  res.status(200).json({
   status: 'success',
  });
 } catch (err) {
  res.status(404).json({
   status: 'F',
   message: err.message,
  });
 }
};
