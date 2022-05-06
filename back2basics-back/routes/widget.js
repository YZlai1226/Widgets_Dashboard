const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const widgetCtrl = require('../controllers/widgetController')

router.get('/', auth, widgetCtrl.getAllwidgets) 
router.post('/', auth, widgetCtrl.createWidget) 
router.delete('/:id', auth, widgetCtrl.deleteWidget) 


module.exports = router;
