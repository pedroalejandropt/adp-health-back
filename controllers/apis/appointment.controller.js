const db = require("../../models");
const Appointment = db.appointments;
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Appointment
exports.create = (req, res) => {
  if (!req.body.date || !req.body.user) {
    res.status(400).send({
      message: "Missing data!"
    });
    return;
  }

  // Create a Appointment
  const appointment = {
    date: req.body.date,
    state: (req.body.state) ? req.body.state : true,
    description: req.body.description,
    fk_user: req.body.user
  };

  // Save Appointment in the database
  Appointment.create(appointment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Appointment."
      });
    });
};

// Retrieve all Appointments from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? {
    id: {
      [Op.iLike]: id
    }
  } : null;

  Appointment.findAll({
      include: [{ model: db.users }],
      where: condition
    })
    .then((data) => {
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving appointments."
      });
    });
};

// Retrieve all Appointments from the database.
exports.findAllActive = (req, res) => {
  const state = true;
  const user = req.params.id;

  var condition = state && user ? {
    state: state,
    fk_user: user
  } : null;

  Appointment.findAll({
      include: [{ model: db.users }],
      where: condition
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving appointments."
      });
    });
};

// Find a Single Appointment with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Appointment.findByPk(id)
    .then(data => {
      console.log(data);
      (data) ?
      res.send([data]):
        res.status(404).send({
          message: err.message || "Appointment doesn't exist"
        });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving appointments."
      });
    });
};

// Update a Appointment by id
exports.update = (req, res) => {
  const id = req.params.id;
  Appointment.update(req.body, {
    where: {
      id: id
    },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Appointment was updated successfully",
      });
    } else {
      res.send({
        message: `Cannot update Appointment with id=${id}`,
      });
    }
  });
};

// Delete a Appointment by id
exports.delete = (req, res) => {
  const id = req.params.id;
  Appointment.destroy({
    where: {
      id: id
    },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Appointment was delete successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete appointment with id=${id}`,
      });
    }
  });
};