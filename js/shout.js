var _ = require('underscore'),
    Backbone = require('backbone'),
    allTrumps = require('./trump-collection.js'),
    getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


module.exports = Backbone.View.extend({
    el: '.shout-container',
    template: require('../tpl/shout.html'),
    initialize: function () {
        this.listenTo(Backbone, 'newTrump', function (trump) {
            this.trump = trump;
        });
        this.listenTo(Backbone, 'clockTick', this.render);
    },

    render: function () {
        var _this = this,
            trump = allTrumps.findWhere({url: '' + _this.trump});

        if (getRandomInt(1,15) === 1) {
            this.$el.empty().append(
                this.template({
                    message: _.sample(allTrumps.phrases[trump.get('phrase')])
                })
            );
            this.$el.removeClass('left-bottom left-top').addClass(
                (getRandomInt(1,3) === 1) ? 'left-top': 'left-bottom'
            );
            // setTimeout(function () {
            //     _this.$el.empty();
            // }, 600);
        }
    }
});
