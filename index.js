var styles = require('./less/index.less'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

var url = 'http://162.209.109.174/trumpFree_0{x}.png',
    trumps = [1, 2, 3, 4, 5, 6, 7],
    mainTrump = 6, s = 1;;

var Timer = Backbone.View.extend({
    template: function () {
        return '<div class="timer">' + this.model.get('time') + '</div>';
    },
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        this.$el.empty().append(this.template());
        return this;
    }
});
var Images = new Backbone.Collection([{
    url: '6',
    power: 3
}, {
    url: '3',
    power: 2
}, {
    url: '2',
    power: 1
}, {
    url: '4',
    power: 4
}, {
    url: '7',
    power: 5
}, {
    url: '1',
    power: 5
}]);
var gameModel = new Backbone.Model({
        score: 0,
        time: 20
    }),
    timer = new Timer({
        model: gameModel
    });
$('body').append(timer.render().$el);

var tick = function () {
    var time = gameModel.get('time');
    gameModel.set('time', time - 1);
    if (gameModel.get('time') === 0) {} else {
        setTimeout(function () {
            tick();
        }, 1000);

    }
};
var startGame = function () {
    gameModel.set('running', true);
    $('.game-start').addClass('hide');
    tick();
};
//stop context menu on right click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

var $left = $('.left'),
    $right = $('.right'),
    $flash = $('.flash');

//punch him
$('body').on('mousedown', '.trump', function (e) {
    var $this = $(this);

    if (e.which === 1) { // left
        var transform = $left.css('transform');
        $left.css('transform', transform + ' translate(10px, 10px)');
        $this.addClass('hit left');
        setTimeout(function () {
            $left.css('transform', transform);
        }, 80);
    } else if (e.which === 3) { // right
        var transform = $right.css('transform');
        $right.css('transform', transform + ' translate(10px, 10px)');
        $this.addClass('hit right');
        setTimeout(function () {
            $right.css('transform', transform);
        }, 80);
    }

    $flash.addClass('ing');
    setTimeout(function () {
        $this.removeClass('hit left right');
        $flash.removeClass('ing');
    }, 70);

    var v = Math.floor(Math.random() * (4 + 1) + 1);
    if (v == 2) {
        $this.attr('src', url.replace('{x}', _.sample(trumps)));
    }
    var asd = $('<div class="score">+50</div>');
    asd.css({
        left: e.pageX,
        top: e.pageY,
    }).appendTo('body').on('animationend', function () {
        $(this).remove();
    });

}).on('click', '.start', startGame);

//gloves movement
var $left = $(".left.tip");
var $right = $(".right.tip");
$(document).on("mousemove", function (evt) {
    $left.css({
        left: evt.pageX - 100,
        top: evt.pageY
    });
    $right.css({
        left: evt.pageX + 100,
        top: evt.pageY - 40
    });

    if (evt.pageX > $(window).width() / 2.2) {
        $('body').css('backgroundColor', 'tomato');
    } else {
        $('body').css('backgroundColor', 'dodgerblue');
    }
});
