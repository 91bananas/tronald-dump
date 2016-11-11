var _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.View.extend({
    el: '.timer-container',
    template: function () {
        return '<div class="timer ' + (this.model.get('running') ? 'running': '') + '">' + this.model.get('time') + '</div>';
    },
    initialize: function () {
        this.listenTo(this.model, 'change', function (model) {
            if (_.has(model.changed, 'running') || _.has(model.changed, 'time')) {
                this.render();
            }
        });
    },
    render: function () {
        this.$el.empty().append(this.template());
        return this;
    }
});
