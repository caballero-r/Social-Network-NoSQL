const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    newThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controller/thoughtsControllers');

router.route('/').get(getAllThoughts);
router.route('/:id').get(getSingleThought);
router.route('/').post(newThought);
router.route('/:id').put(updateThought);
router.route('/:id').delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;