// Imports required
const User = require('../models/users');
const Thought = require('../models/thoughts');

// Query for get all users
const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find()
        res.status(200).json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Query for get a single thought
const getSingleThought = async (req, res) => {
    try {
        const thought = await Thought.find({ _id: req.params.id })
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Query to add new thought
const newThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        
        // Adds the new created thought to the user with the same username
        const user = await User.findOneAndUpdate(
            { username: thought.username},
            {$push: { thoughts: thought._id } },
            {new: true, runValidators: true },
        );
        res.status(200).json({message: 'Successfully added thought to the user', user})
    } catch (err) {
        res.status(500).json(err);
    }
}

// Query to update a thought
const updateThought = async (req, res) => {
    try {
        const result = await Thought.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body },
            {new: true, runValidators: true}
        )
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Query to delete a thought
const deleteThought = async (req, res) => {
    try {
        const result = await Thought.findOneAndDelete({_id: req.params.id});
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

// The following queries are for adding and deleting reactions
const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId },
            {$addToSet: { reactions: req.body } },
            {new: true, runValidators: true}
        );
        res.status(200).json({message: 'Successfully added reaction!', thought});
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteReaction = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: { reactions: {_id: req.params.reactionId}}},
            {new: true, runValidators: true}
        )
        res.status(200).json({message: 'Successfully deleted the reaction!'});
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getAllThoughts,
    getSingleThought,
    newThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
}