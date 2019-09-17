const tasks_controller = require('../controllers/tasks_controller');

module.exports = function(app) {
    app.get('/tasks', tasks_controller.index);
    app.post('/tasks', tasks_controller.create);
    app.get('/tasks/:id', tasks_controller.show);
    app.put('/tasks/:id', tasks_controller.update);
    app.delete('/tasks/:id', tasks_controller.destroy);
}