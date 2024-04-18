const express = require('express');
const { getAllUsers, getSingleUser, createNewUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

// get all users
router.get('/users', getAllUsers)

// get a single user

router.get('/users/:id', getSingleUser)

// create a new user

router.post('/users', createNewUser)

// update a user

router.put('/users/:id', updateUser)

// delete a user

router.delete('/users/:id', deleteUser)







module.exports = router