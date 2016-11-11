var Backbone = require('backbone'),
    Model = Backbone.Model.extend({
        defaults: {
            time: 20
        }
    });

module.exports = new Model({
    score: 0,
    time: 20
});
