const db = require("../../models");
const User = db.users;
const Role = db.roles;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  if (!req.body.firstName || !req.body.firstLastName ||
    !req.body.secondLastName || !req.body.email ||
    !req.body.password || !req.body.email ||
    !req.body.password || !req.body.role) {
    res.status(400).send({
      message: "Missing data!"
    });
    return;
  }

  // Create a User
  const user = {
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    firstLastName: req.body.firstLastName,
    secondLastName: req.body.secondLastName,
    email: req.body.email,
    password: req.body.password,
    fk_role: req.body.role
  };

  // Save User in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: (err.errors[0].type == 'unique violation') ? "Mail already in used" : err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? {
    email: {
      [Op.iLike]: `%${email}%`
    }
  } : null;

  User.findAll({
      where: condition
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};

// Retrieve all Users from the database.
exports.findAllAdmin = (req, res) => {
  const fk_role = 1;
  var condition = fk_role ? {
    fk_role: {
      [Op.eq]: fk_role
    }
  } : null;

  User.findAll({
      where: condition
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};

// Retrieve all Users from the database.
exports.findAllPacient = (req, res) => {
  const fk_role = 2;
  var condition = fk_role ? {
    fk_role: {
      [Op.eq]: fk_role
    }
  } : null;

  User.findAll({
      where: condition
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a Single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then(data => {
      console.log(data);
      (data) ?
      res.send([data]):
        res.status(404).send({
          message: err.message || "User doesn't exist"
        });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a Single User with email and password
exports.login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const email = req.body.email;
  const password = req.body.password;

  console.log(email);
  console.log(password);

  var condition = email && password ? {
    email: {
      [Op.eq]: `${email}`
    },
    password: {
      [Op.eq]: `${password}`
    }
  } : null;

  User.findAll({
    where: condition,
    include: [{ model: db.roles }]
    })
    .then(data => {
      //console.log(data);
      (data[0]) ?
      res.send([data[0]]):
        res.status(404).send({
          message: err.message || "User doesn't exist"
        });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    });
};

// Update a User by id
exports.update = (req, res) => {
  const id = req.params.id;
  User.update(req.body, {
    where: {
      id: id
    },
  }).then((data) => {
    if (data) {
      res.send({
        message: "User was updated successfully",
      });
    } else {
      res.send({
        message: `Cannot update User with id=${id}`,
      });
    }
  });
};

// Delete a User by id
exports.delete = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: {
      id: id
    },
  }).then((data) => {
    if (data) {
      res.send({
        message: "User was delete successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete User with id=${id}`,
      });
    }
  });
};