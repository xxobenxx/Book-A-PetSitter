
const express     = require('express'),
router        = express.Router(),
controller    = require('../controllers/authControllers');



router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/verify_token', controller.verify_token);
router.post('/getCurrent', controller.getCurrentUser);
router.post('/updateUser', controller.updateUser);

module.exports = router;