const db = require("../../models");
const Role = db.roles;
const Op = db.Sequelize.Op;

// Create and Save a new Role
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }

    // Create a Role
    const role = {
    name: req.body.name
    };

    // Save Role in the database
    Role.create(role)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Role."
        });
    });
};

// Retrieve all Roles from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Role.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving roles."
        });
    });
};

// Find a single Role with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  
    Role.findByPk(id)
      .then(data => {
        console.log(data);
        (data) ?
          res.send([data]) :
          res.status(404).send({
            message:
              err.message || "Role doesn't exist"
          });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving roles."
        });
    });
};

// Update a Role by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Role.update(req.body, {
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Role was updated successfully",
      });
    } else {
      res.send({
        message: `Cannot update Role with id=${id}`,
      });
    }
  });
};

// Delete a Role with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Role.destroy({
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Role was delete successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete Role with id=${id}`,
      });
    }
  });
};

// Delete all Role from the database.
exports.deleteAll = (req, res) => {
  Role.destroy({
  }).then((data) => {
    if (data) {
      res.send({
        message: "Roles were delete successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete all Roles`,
      });
    }
  });
};

// Find all published Role
exports.findAllPublished = (req, res) => {
  
};