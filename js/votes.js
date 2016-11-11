var Backbone = require('backbone'),
    allTrumps = require('./trump-collection.js'),
    $ = require('jquery');

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
    handlePunch: function (e) {
        var trump = allTrumps.findWhere({url: this.trump});
        var power = trump.get('power');
        var score = this.model.get('score');
        var modifier = Math.floor(5 / power);
        var newScore = score - modifier || 1;
        score = newScore > 0 ? newScore : 0;
        this.model.set('score', score);
        this.displayModifier(modifier, e);
    },
    displayModifier: function (modifier, e) {
        var asd = $('<div class="score">-' + modifier + '</div>');
        asd.css({
            left: e.pageX,
            top: e.pageY,
        }).appendTo('body').on('animationend', function () {
            $(this).remove();
        });
    }
});
