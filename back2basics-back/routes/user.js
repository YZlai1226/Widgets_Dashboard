const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();

const userCtrl = require('../controllers/userController');
router.post('/', userCtrl.createUser)
router.get('/', userCtrl.getAllusers)
router.get('/:id', auth, userCtrl.getOneUser)
router.put('/:id', auth, userCtrl.modifyUser)
router.put('/add_widget/:id', auth, userCtrl.addWidget)
router.put('/remove_widget/:id', auth, userCtrl.addWidget)


module.exports = router;


