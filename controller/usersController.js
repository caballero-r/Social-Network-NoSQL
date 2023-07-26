// Import required
const User = require('../models/users');
const Thought = require('../models/thoughts');

// Query for get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        .populate('thoughts')
        .populate('friends');
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Query for get a single user
const getSingleUser = async (req, res) => {
    try {
        const user = await User.find({ _id: req.params.id })
        .populate('thoughts')
        .populate('friends');
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Query to add new user
const newUser = async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.status(200).json({message: 'Success', users: result})
    } catch (err) {
        res.status(500).json(err);
    }
}

// Query to update a user
const updateUser = async (req, res) => {
    try {
        const result = await User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: { username: req.body.username, email: req.body.email}},
            {new: true, runValidators: true}
        )
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Query to delete a user
const deleteUser = async (req, res) => {
    try {
        const result = await User.findOneAndDelete({_id: req.params.id});
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

// The following queries are for adding and deleting friends from the associated user
const addFriend = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            {_id: req.params.userId },
            {$addToSet: { friends: req.params.friendId } },
            {new: true, runValidators: true}
        );
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteFriend = async (req, res) => {
    try {
        const result = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: { friends: req.params.friendId}},
            {new: true, runValidators: true}
        )
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    newUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
}