var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    template: function () {
        return '<div class="timer ' + (this.model.get('running') ? 'running': '') + '">' + this.model.get('time') + '</div>';
    },
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        this.$el.empty().append(this.template());
        return this;
    }
});
