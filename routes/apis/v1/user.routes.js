const users = require("../../../controllers/apis/user.controller.js");
var router = require("express").Router();

// Create a new User
router.post("/", users.create);

// Retrieve all Users
router.get("/", users.findAll);

// Retrieve all Admins
router.get("/admin", users.findAllAdmin);

// Retrieve all Pacients
router.get("/pacient", users.findAllPacient);

// Login
router.post("/login", users.login);

// Retrieve a single User with id
router.get("/:id", users.findOne);

// Update a User with id
router.put("/:id", users.update);

// Delete a User with id
router.delete("/:id", users.delete);

module.exports = router;
