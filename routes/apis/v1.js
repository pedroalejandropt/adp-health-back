const userRoutes = require('./v1/user.routes.js');
const rolesRoutes = require('./v1/role.routes.js');
const appointmentsRoutes = require('./v1/appointment.routes.js');
const noveltiesRoutes = require('./v1/appointment-novelty.routes.js');

const express = require('express');
let router = express.Router();

router.use('/users', userRoutes);
router.use('/roles', rolesRoutes);
router.use('/appointments', appointmentsRoutes);
router.use('/novelties', noveltiesRoutes);

module.exports = router;