var Backbone = require('backbone'),
    Model = Backbone.Model.extend({
        defaults: {
            time: 20,
            score: 0
        }
    });

module.exports = new Model({
    score: 0,
    time: 20
});
