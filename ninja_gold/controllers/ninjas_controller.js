const Ninja = require('../models/ninja');

module.exports = {
    index: function(req, res){
        console.log('You are on the index route.');
        Ninja.find()
            .then(ninjas => res.json(ninjas))
            .catch(errors => res.json(errors));
    },
    create: function(req, res){
        console.log('You are on the create route.');
        console.log('Here is the information from the req.body', req.body);
        const new_ninja = new Ninja();
        new_ninja.name = req.body.name;
        new_ninja.save()
            .then(success => {
                console.log('Ninja Created: ', success);
                res.redirect('/');
            })
            .catch(errors => {
                console.log('Unable to create new Ninja.');
                res.json(errors)
            });
    },
    show: function(req, res){
        console.log('You are in the show route.');
        Ninja.findOne({_id: req.params.id})
            .then(response => {
                console.log('Ninja found: ', response);
                res.json(response);
            })
            .catch(errors => {
                console.log('Unable to find Ninja.');
                res.redirect('/');
            });
    },
    update: function(req, res){
        console.log('You are in the update route.');
        console.log(req.body)
        Ninja.findOne({_id: req.params.id})
            .then(response => {
                response.gold += req.body.gold;
                response.save()
                .then(success =>{
                    console.log("Your ninja's gold has been updated.", response )
                    res.json(success)
                })
                .catch(errors => {
                    console.log('Unable to update gold.');
                    res.json(errors);
                });
            })
    },
    destroy: function(req, res){
        console.log('You are in the destroy route.');
        Ninja.deleteOne({ _id: req.params.id })
            .then(removed =>{
                console.log('Ninja removed.', removed);
                res.redirct('/');
            })
            .catch(errors =>{
                console.log('Unable to delete ninja.')
                res.json(errors);
            })
    }
}