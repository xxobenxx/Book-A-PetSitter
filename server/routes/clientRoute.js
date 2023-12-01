const express     = require('express'),
router        = express.Router(),
controller    = require('../controllers/ClientController');




router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/verify_token', controller.verify_token);

// router.get('/', controller.findAll);
// router.get('/:user', controller.findOne);
//router.post('/new', controller.insert);
//router.post('/delete', controller.delete);
// router.post('/update', controller.update);


module.exports = router;