const appointments = require("../../../controllers/apis/appointment.controller.js");
var router = require("express").Router();

// Create a new appointment
router.post("/", appointments.create);

// Retrieve all Appointments
router.get("/", appointments.findAll);

// Retrieve all Appointments Active
router.get("/active", appointments.findAllActive);

// Retrieve a single appointment with id
router.get("/:id", appointments.findOne);

// Update a User with id
router.put("/:id", appointments.update);

// Delete a User with id
router.delete("/:id", appointments.delete);

module.exports = router;
