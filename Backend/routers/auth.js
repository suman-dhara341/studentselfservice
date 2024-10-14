const express = require('express');
const router = express.Router();

const { registration } = require('../controllers/authControllers');
const { login } = require('../controllers/authLogin');
const { admin } = require('../controllers/authAdmin');

router.route('/').post(registration);
router.route('/login').post(login);
router.route('/admin').get(admin);

module.exports = router; 
