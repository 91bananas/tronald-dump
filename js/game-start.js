var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    el: '.game-start',
    template: require('../tpl/game-start.html'),
    initialize: function (options) {
        this.options = options || {};
        this.render();
        this.listenTo(this.model, 'change:running', function () {
            if (this.model.get('running')) {
                this.render();
            }
        });
    },
    render: function () {
        this.$el.empty().append(
            this.template()
        );
    },

    events: {
        'click .start': 'start'
    },

    start: function () {
        this.model.set('running', true);
        this.$el.addClass('hide');
        Backbone.trigger('tick');
    }
});
