module.exports = (sequelize, Sequelize) => {
  const Appointment = sequelize.define("appointment", {
    date: {
      type: Sequelize.DATE
    },
    state: {
      type: Sequelize.BOOLEAN
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return Appointment;
};