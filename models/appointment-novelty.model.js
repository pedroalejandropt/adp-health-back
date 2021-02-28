module.exports = (sequelize, Sequelize) => {
    const AppointmentNovelty = sequelize.define("appointmentNovelty", {
        description: {
            type: Sequelize.STRING
        }
    });

    return AppointmentNovelty;
};