const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const serviceCtrl = require('../controllers/serviceController')

router.post('/', auth, serviceCtrl.createService);
router.delete('/:id', auth, serviceCtrl.deleteService)
router.get('/', auth, serviceCtrl.getAllservices)


module.exports = router;