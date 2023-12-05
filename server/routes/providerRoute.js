
const express     = require('express'),
router        = express.Router(),
controller    = require('../controllers/ProviderController');



router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/verify_token', controller.verify_token);
router.post('/update-provider-info', controller.updateProviderInfo);

module.exports = router;

