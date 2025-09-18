const express = require('express');
const bodyParser = require('body-parser');
const incidentRoutes = require('./routes/incidents');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use('/api/incidents', incidentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
