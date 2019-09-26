const ninjas_controller = require('../controllers/ninjas_controller');

module.exports = function(app) {
    app.get('/', ninjas_controller.index);
    app.get('/ninjas', ninjas_controller.index);
    app.post('/ninjas', ninjas_controller.create);
    app.get('/ninjas/:id', ninjas_controller.show);
    app.put('/ninjas/:id', ninjas_controller.update);
    app.delete('/ninjas/:id', ninjas_controller.destroy);

}