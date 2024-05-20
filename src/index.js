const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const trainingCenterRoutes = require('./routes/trainingCenters');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/traini8', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/api/training-centers', trainingCenterRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
