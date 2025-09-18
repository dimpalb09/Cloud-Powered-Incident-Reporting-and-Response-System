const express = require('express');
const router = express.Router();
const incidentController = require('../controllers/incidentController');

router.post('/report', incidentController.reportIncident);
router.get('/all', incidentController.getAllIncidents);

module.exports = router;
