const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
        title: {type: String, required: [true, 'Must have a title.'], minlength: 2 },
        description: {type: String, required: [true, 'Must have a description'], minlength: 5, default: ''},
        completed: {type: Boolean, default: false}
    },
    {
        timestamps: true
    });

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;