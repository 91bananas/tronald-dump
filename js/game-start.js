var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    el: '.game-start',
    template: require('../tpl/game-start.html'),
    welcome: 'Can you stop the donald from getting 270!?',
    lose: 'YOU LOSE! MY PRESIDENCY IS GONNA BE YUUUGGE!',
    win: 'This game is obviously rigged',

    initialize: function (options) {
        this.options = options || {};
        this.render();
        this.listenTo(this.model, 'change:running', this.render);
        this.listenTo(this.model, 'change:lost', this.render);
    },
    render: function () {
        var _this = this;
        this.$el.empty().append(
            this.template({
                message: this.model.get('lost') ? _this.lose : _this.welcome
            })
        );
        if (!this.model.get('running') || this.model.get('lost')) {
            this.$el.removeClass('hide');
        }
    },

    events: {
        'click .start': 'start'
    },

    start: function () {
        this.model.set('running', true);
        this.$el.addClass('hide');
        Backbone.trigger('tickStart');
        this.model.set(this.model.defaults);
    }
});
