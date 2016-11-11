var Backbone = require('backbone'),
    allTrumps = require('./trump-collection.js'),
    base = require('./base-url.js'),
    getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
module.exports = Backbone.View.extend({
    el: '.trump-dump',
    template: require('../tpl/trump.html'),
    initialize: function (options) {
        this.options = options || {};
        this.collection = allTrumps;
        this.listenTo(Backbone, 'newTrump', function (trump) {
            this.trump = trump;
            this.render(this.collection.findWhere({url: '' + trump}));
        });
        this.listenTo(Backbone, 'clockTick', function () {
            var score = this.model.get('score');
            var currentModel = this.collection.findWhere({url: '' + this.trump});
            score += currentModel.get('power') * getRandomInt(4,10);
            if (score > 269) {
                this.model.set('lost', true);
            }
            this.model.set('score', score);
        });
        //img/trumpFree_06.png
    },

    render: function (model) {
        this.$el.empty().append(
            this.template({
                model: model.toJSON(),
                base: base
            })
        );
    }
});
