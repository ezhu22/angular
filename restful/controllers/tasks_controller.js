const Task = require('../models/task');

module.exports = {
    index: function(req, res){
        console.log('You are on the index route');
        Task.find()
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err));
    },

    create: function(req, res){
        console.log('You are on the create route');
        console.log('Here is the information from the req.body', req.body)
        const new_task = new Task();
        new_task.title = req.body.title;
        new_task.description = req.body.description;
        new_task.save()
            .then(success => {
                console.log('Task created: ', success)
                res.json(success);
            })
            .catch(err => {
                console.log('Unable to create task.')
                res.json(err)
            })
    },

    show: function(req, res){
        console.log('You are in the show route.')
        Task.findOne({_id: req.params.id})
            .then(response =>{
                console.log('task found', response)
                res.json(response)
            })
            .catch(err =>{
                console.log('something went wrong with the search.')
                res.json(err)
            })
    },

    update: function(req, res){
        console.log('You are in the update route.')
        Task.findOne({_id: req.params.id})
            .then(response => {
                response.title = req.body.title;
                response.description = req.body.description
                response.save()
                    .then(success =>{
                        console.log('Task updated successfully', success)
                        res.json(success)
                    })
                    .catch(err => {
                        console.log('Unable to save edits.')
                        res.json(err)
                    });
            })
            .catch(err => {
                console.log('Unable to find task.')
                res.json(err)
            });
    },

    destroy: function(req, res){
        console.log('You are in the destroy route.')
        Task.deleteOne({ _id: req.params.id })
            .then(removed => {
                console.log('Task removed from db.', removed)
                res.json(removed)
            })
            .catch(err =>{
                console.log('Unable to delete task.')
                res.json(err)
            })
    }
}