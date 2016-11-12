var Backbone = require('backbone'),
    Model = Backbone.Model.extend({
        defaults: {
            time: 20,
            score: 0,
            lost: false
        }
    });

module.exports = new Model(Model.defaults);
