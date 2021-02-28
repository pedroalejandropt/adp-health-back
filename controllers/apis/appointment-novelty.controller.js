const db = require("../../models");
const AppointmentNovelty = db.appointment_novelties;
const Op = db.Sequelize.Op;

// Create and Save a new Appointment Novelty
exports.create = (req, res) => {
  if (!req.body.description || !req.body.appointment) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Appointment Novelty
  const appointment = {
    description: req.body.description,
    fk_appointment: req.body.appointment
  };

  // Save Appointment Novelty in the database
  AppointmentNovelty.create(appointment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Appointment Novelty."
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

  AppointmentNovelty.findAll({
      where: condition
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving appointment novelties."
      });
    });
};

// Retrieve all Appointments from the database.
exports.findByAppointment = (req, res) => {
  const id = req.params.id;
  var condition = id ? {
    fk_appointment: id
  } : null;

  AppointmentNovelty.findAll({
      where: condition
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving appointment novelties."
      });
    });
};

// Find a Single Appointment Novelty with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  AppointmentNovelty.findByPk(id)
    .then(data => {
      console.log(data);
      (data) ?
      res.send([data]):
        res.status(404).send({
          message: err.message || "Appointment Novelty doesn't exist"
        });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving appointment novelties"
      });
    });
};

// Update a Appointment Novelty by id
exports.update = (req, res) => {
  const id = req.params.id;
  AppointmentNovelty.update(req.body, {
    where: {
      id: id
    },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Appointment Novelty was updated successfully",
      });
    } else {
      res.send({
        message: `Cannot update appointment novelty with id=${id}`,
      });
    }
  });
};

// Delete a Appointment by id
exports.delete = (req, res) => {
  const id = req.params.id;
  AppointmentNovelty.destroy({
    where: {
      id: id
    },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Appointment Novelty was delete successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete appointment novelty with id=${id}`,
      });
    }
  });
};