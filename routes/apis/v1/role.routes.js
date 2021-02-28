const roles = require("../../../controllers/apis/role.controller.js");
var router = require("express").Router();

// Create a new Role
router.post("/", roles.create);

// Retrieve all Roles
router.get("/", roles.findAll);

// Retrieve a single Role with id
router.get("/:id", roles.findOne);

// Update a Role with id
router.put("/:id", roles.update);

// Delete a Role with id
router.delete("/:id", roles.delete);

// Delete all Roles
router.delete("/", roles.deleteAll);

module.exports = router;
