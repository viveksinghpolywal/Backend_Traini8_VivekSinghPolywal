const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    detailedAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true }
});

const trainingCenterSchema = new Schema({
    centerName: { type: String, required: true, maxlength: 40 },
    centerCode: { type: String, required: true, length: 12, match: /^[a-zA-Z0-9]{12}$/ },
    address: { type: addressSchema, required: true },
    studentCapacity: { type: Number, required: true },
    coursesOffered: { type: [String], default: [] },
    createdOn: { type: Date, default: Date.now },
    contactEmail: { type: String, validate: { validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), message: props => `${props.value} is not a valid email!` } },
    contactPhone: { type: String, required: true, validate: { validator: (v) => /^\d{10}$/.test(v), message: props => `${props.value} is not a valid phone number!` } }
});

module.exports = mongoose.model('TrainingCenter', trainingCenterSchema, 'TrainingCenter');
