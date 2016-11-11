var Backbone = require('backbone'),
    allTrumps = require('./trump-collection.js');

module.exports = Backbone.View.extend({
    template: require('../tpl/trump.html'),
    initialize: function (options) {
        this.options = options || {};
    },
    render: function () {
        this.$el.empty().append(
            this.template()
        )
    }
});
