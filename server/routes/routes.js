const express = require('express');
const router = express.Router();
const getUsers  = require('../controllers/users.controller');

/// ADMIN ROUTES ///

// Get Home
router.get('/', function (req, res) {
    req.body;
    res.send(req.body)
})
// GET Users 
router.get('/api/users', function (req, res) {
    res.json({message: getUsers})
});

// POST Users
// router.post('/api/usersbrb/id:', createUser);

module.exports = router;