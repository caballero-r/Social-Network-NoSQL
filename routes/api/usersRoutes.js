// Import required
const router = require('express').Router();

const {
    getAllUsers,
} = require('../../controller/usersController');

router.route('/').get(getAllUsers);

module.exports = router;