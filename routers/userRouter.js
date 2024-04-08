const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');

router.post('/createuser', controller.createUser);
router.get('/getuser', controller.getAllUser);
router.get('/getuser/:id', controller.getUserById);
router.delete('/deleteuser', controller.deleteAll);
router.delete('/deleteuser/:id', controller.deleteOne);
router.patch('/updateuser/:id', controller.updateUser);

module.exports = router;
