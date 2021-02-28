const novelties = require("../../../controllers/apis/appointment-novelty.controller.js");
var router = require("express").Router();

// Create a new noveltie
router.post("/", novelties.create);

// Retrieve all novelties
router.get("/", novelties.findAll);

// Retrieve all novelties by appointment
router.get("/appointment/:id", novelties.findByAppointment);

// Retrieve a single appointment with id
router.get("/:id", novelties.findOne);

// Update a User with id
router.put("/:id", novelties.update);

// Delete a User with id
router.delete("/:id", novelties.delete);

module.exports = router;
