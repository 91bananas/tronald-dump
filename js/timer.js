var _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.View.extend({
    el: '.timer-container',
    template: function () {
        return '<div class="timer ' + (this.model.get('running') ? 'running': '') + '">' + this.model.get('time') + '</div>';
    },
    initialize: function () {
        this.listenTo(this.model, 'change', function (model) {
            if (_.has(model.changed, 'lost')) {
                this.model.set({
                    running: false,
                    time: 0
                });
            }
            if (_.has(model.changed, 'running') || _.has(model.changed, 'time')) {
                this.render();
            }
        });
        this.listenTo(Backbone, 'tickStart', this.go);
    },
    render: function () {
        this.$el.empty().append(this.template());
        return this;
    },
    go: function () {
        var _this = this;
        var startTime = Math.floor(Date.now() / 1000); //unix timestamp in seconds
        var gameLength = _this.model.get('time'); //in seconds
        var tick = function () {
           var currentTime = Math.floor(Date.now() / 1000);
           var elapsedSeconds = currentTime - startTime;
           var computed = Math.round( (gameLength - elapsedSeconds) * 10 ) / 10;
           _this.model.set('time', computed);

           if (computed <= 0) {
              Backbone.trigger('timeUp');
              _this.model.set('running', false);
              return;
           }

           Backbone.trigger('clockTick');
           setTimeout(function() {
               tick();
           }, 100);
        };

        tick();
    }
});
