var Backbone = require('backbone'),
    allTrumps = require('./trump-collection.js'),
    base = require('./base-url.js');

module.exports = Backbone.View.extend({
    el: '.trump-dump',
    template: require('../tpl/trump.html'),
    initialize: function (options) {
        this.options = options || {};
        this.collection = allTrumps;
        this.listenTo(Backbone, 'newTrump', function () {
            this.render(this.collection.findWhere({url: '' + arguments[0]}));
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
