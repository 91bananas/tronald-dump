var Backbone = require('backbone'),
    allTrumps = require('./trump-collection.js');

module.exports = Backbone.View.extend({
    template: require('../tpl/votes.html'),
    initialize: function (options) {
        this.options = options || {};
        this.render();
        this.listenTo(Backbone, 'newTrump', function (trump) {
            this.trump = trump + '';
        });
        this.listenTo(Backbone, 'punch', this.handlePunch);
    },
    render: function () {
        this.template(
            this.model.toJSON()
        )
    },
    handlePunch: function () {
        var trump = allTrumps.findWhere({url: this.trump});
        debugger;
    }
})
