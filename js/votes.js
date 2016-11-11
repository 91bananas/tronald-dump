var Backbone = require('backbone'),
    allTrumps = require('./trump-collection.js');

module.exports = Backbone.View.extend({
    el: '.score-container',
    template: require('../tpl/votes.html'),
    initialize: function (options) {
        this.options = options || {};
        this.render();
        this.listenTo(Backbone, 'newTrump', function (trump) {
            this.trump = trump + '';
        });
        this.listenTo(Backbone, 'punch', this.handlePunch);
        this.listenTo(this.model, 'change:score', this.render);
        this.render();
    },
    render: function () {
        this.$el.empty().append(
            this.template(
                this.model.toJSON()
            )
        );
    },
    handlePunch: function () {
        var trump = allTrumps.findWhere({url: this.trump});
        var power = trump.get('power');
        var score = this.model.get('score');
        score -= Math.floor(5 / power);
        this.model.set('score', score);
    }
})
