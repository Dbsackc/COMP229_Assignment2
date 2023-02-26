/*index.js, Chan Kai Chung, 301321990, 9th Feb 2023*/
let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);
router.get('/about', indexController.displayAboutPage);
router.get('/projects', indexController.displayProjectPage);
router.get('/contact', indexController.displayContactPage);
router.get('/services', indexController.displayServicesPage);

router.get('/login', indexController.displayLoginPage);
router.post('/login', indexController.processLoginPage);
router.get('/register', indexController.displayRegisterPage);
router.post('/register', indexController.processRegisterPage);
router.get('/logout', indexController.performLogout);


module.exports = router;
