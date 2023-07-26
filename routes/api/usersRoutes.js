// Import required
const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    newUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controller/usersController');

router.route('/').get(getAllUsers);
router.route('/:id').get(getSingleUser);
router.route('/').post(newUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend);
router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;