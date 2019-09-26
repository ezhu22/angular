const mongoose = require('mongoose');

const NinjaSchema = new mongoose.Schema(
    {
        name: {type: String, required: [true, 'Must have a name.'], minlength: 2 },
        gold: {type: Number, default: 0}
    },
    {
        timestamps: true
    });

const Ninja = mongoose.model('Ninja', NinjaSchema);
module.exports = Ninja;