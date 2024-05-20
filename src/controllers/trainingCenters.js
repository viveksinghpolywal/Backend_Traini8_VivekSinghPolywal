const TrainingCenter = require('../models/TrainingCenter');

exports.createTrainingCenter = async (req, res) => {
    try {
        const { centerName, centerCode, address, studentCapacity, coursesOffered, contactEmail, contactPhone } = req.body;

        const newTrainingCenter = new TrainingCenter({
            centerName,
            centerCode,
            address,
            studentCapacity,
            coursesOffered,
            contactEmail,
            contactPhone
        });

        const savedTrainingCenter = await newTrainingCenter.save();
        res.status(201).json(savedTrainingCenter);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllTrainingCenters = async (req, res) => {
    try {
        const trainingCenters = await TrainingCenter.find();
        res.status(200).json(trainingCenters);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
