const router = require('express').Router();


const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughts-controller");


router
.route("/")
.get(getAllThoughts);

//user thoughts
router
.route("/:userId")
.post(addThought);

// get thoughts and update
router.route("/:thoughtId")
.get(getThoughtById)
.put(updateThought);

// get thoughts and delete
router
.route("/:thoughtId/:userId")
.delete(removeThought);

// get thoughts and add reactions
router
.route("/:thoughtId/reactions")
.post(addReaction);

// get thoughts and remove reactions
router
.route("/:thoughtId/reactions/:reactionId")
.delete(removeReaction);

module.exports = router;