const db = require("../../models");

exports.create = async () => {
    await db.roles.create({
        name: 'Admin',
    });

    await db.roles.create({
        name: 'Pacient',
    });

    await db.users.create({
        firstName: 'Admin1',
        firstLastName: 'No',
        secondLastName: '1',
        email: 'admin1@adp.com',
        password: '123456',
        fk_role: 1
    });

    await db.users.create({
        firstName: 'Admin2',
        firstLastName: 'No',
        secondLastName: '2',
        email: 'admin2@adp.com',
        password: '123456',
        fk_role: 1
    });

    await db.users.create({
        firstName: 'Admin3',
        firstLastName: 'No',
        secondLastName: '3',
        email: 'admin3@adp.com',
        password: '123456',
        fk_role: 1
    });

    await db.users.create({
        firstName: 'Admin4',
        firstLastName: 'No',
        secondLastName: '4',
        email: 'admin4@adp.com',
        password: '123456',
        fk_role: 1
    });

    await db.users.create({
        firstName: 'Pacient1',
        firstLastName: 'No',
        secondLastName: '1',
        email: 'pacient1@adp.com',
        password: '123456',
        fk_role: 2
    });

    await db.users.create({
        firstName: 'Pacient2',
        firstLastName: 'No',
        secondLastName: '2',
        email: 'pacient2@adp.com',
        password: '123456',
        fk_role: 2
    });

    await db.users.create({
        firstName: 'Pacient3',
        firstLastName: 'No',
        secondLastName: '3',
        email: 'pacient3@adp.com',
        password: '123456',
        fk_role: 2
    });

    await db.users.create({
        firstName: 'Pacient4',
        firstLastName: 'No',
        secondLastName: '4',
        email: 'pacient4@adp.com',
        password: '123456',
        fk_role: 2
    });

    await db.users.create({
        firstName: 'Pacient5',
        firstLastName: 'No',
        secondLastName: '5',
        email: 'pacient5@adp.com',
        password: '123456',
        fk_role: 2
    });

    await db.users.create({
        firstName: 'Pacient6',
        firstLastName: 'No',
        secondLastName: '6',
        email: 'pacient6@adp.com',
        password: '123456',
        fk_role: 2
    });

    await db.appointments.create({
        date: "2021-01-04 00:00:00+00:00",
        state: false,
        description: "Appointment No 1",
        fk_user: 5
    });

    await db.appointments.create({
        date: "2021-03-01 00:00:00+00:00",
        state: true,
        description: "Appointment No 2",
        fk_user: 5
    });

    await db.appointments.create({
        date: "2021-03-26 00:00:00+00:00",
        state: true,
        description: "Appointment No 3",
        fk_user: 5
    });

    await db.appointments.create({
        date: "2021-03-04 00:00:00+00:00",
        state: true,
        description: "Appointment No 1",
        fk_user: 6
    });

    await db.appointments.create({
        date: "2021-03-12 00:00:00+00:00",
        state: true,
        description: "Appointment No 2",
        fk_user: 6
    });

    await db.appointments.create({
        date: "2021-03-29 00:00:00+00:00",
        state: true,
        description: "Appointment No 3",
        fk_user: 6
    });

    await db.appointments.create({
        date: "2021-02-28 00:00:00+00:00",
        state: false,
        description: "Appointment No 1",
        fk_user: 7
    });

    await db.appointments.create({
        date: "2021-03-11 00:00:00+00:00",
        state: true,
        description: "Appointment No 2",
        fk_user: 7
    });

    await db.appointments.create({
        date: "2021-03-28 00:00:00+00:00",
        state: false,
        description: "Appointment No 1",
        fk_user: 8
    });

    await db.appointments.create({
        date: "2021-04-17 00:00:00+00:00",
        state: true,
        description: "Appointment No 2",
        fk_user: 8
    });

    await db.appointment_novelties.create({
        description: "Description 1",
        fk_appointment: 2
    });

    await db.appointment_novelties.create({
        description: "Description 2",
        fk_appointment: 3
    });

    await db.appointment_novelties.create({
        description: "Description 3",
        fk_appointment: 4
    });

    await db.appointment_novelties.create({
        description: "Description 4",
        fk_appointment: 5
    });

    await db.appointment_novelties.create({
        description: "Description 5",
        fk_appointment: 6
    });
};