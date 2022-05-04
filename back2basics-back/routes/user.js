const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();

const userCtrl = require('../controllers/userController');
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/', userCtrl.createUser)
router.get('/', userCtrl.getAllusers)
router.get('/:id', userCtrl.getOneUser)
router.put('/:id', userCtrl.modifyUser)
router.put('/add_widget/:id', auth, userCtrl.addWidget)
router.put('/remove_widget/:id', auth, userCtrl.addWidget)


module.exports = router;


