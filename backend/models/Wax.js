const mongoose = require('mongoose');

const WaxSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: [true, 'Please add a type']
        },
        amount: Number,
    }
)

module.exports = mongoose.model('Wax', WaxSchema);