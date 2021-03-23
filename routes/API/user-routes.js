const router = require('express').Router();


const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers
  } = require('../../controllers/user-controller');


router
.route('/')
.get(getAllUsers)
.post(createUsers);

router.route('/:updateUser')
.put(updateUsers)
// .delete(deleteUsers)

module.exports = router