const express = require('express');
const { getAllServices, getSingleService, getNewService, updateService, deleteService } = require('../controllers/serviceController');
const router = express.Router();

// get all services
router.get('/services', getAllServices )

// get a single service

router.get('/services/:id', getSingleService)

// create a new service

router.post('/services', getNewService )

// update a service

router.put('/services/:id', updateService )

// delete a service

router.delete('/services/:id', deleteService)

module.exports = router;