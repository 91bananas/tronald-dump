var $ = require('jquery'),
    base = require('./base-url.js'),
    _ = require('underscore'),
    trumps = [1, 2, 3, 4, 5, 6, 7],
    Backbone = require('backbone');
module.exports = function () {
    var $left = $(".left.tip"),
        $right = $(".right.tip"),
        $flash = $('.flash');

    $(document).on("mousemove", function (evt) {
        $left.css({
            left: evt.pageX - 140,
            top: evt.pageY
        });
        $right.css({
            left: evt.pageX + 120,
            top: evt.pageY - 40
        });

        if (evt.pageX > $(window).width() / 2.2) {
            $('body').css('backgroundColor', 'tomato');
        } else {
            $('body').css('backgroundColor', 'dodgerblue');
        }
    });

    //punch him
    $('body').on('mousedown', '.trump', function (e) {
        var $this = $(this);

        if (e.which === 1) { // left
            var transform = $left.css('transform');
            $left.css('transform', transform + ' translate(25px, 35px)');
            $this.addClass('hit left');
            setTimeout(function () {
                $left.css('transform', transform);
            }, 80);
        } else if (e.which === 3) { // right
            var transform = $right.css('transform');
            $right.css('transform', transform + ' translate(25px, 35px)');
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

        var v = Math.floor(Math.random() * (5 + 1) + 1);
        if (v == 2) {
            var newTrump = _.sample(trumps);
            $this.attr('src', base + newTrump + '.png');
            Backbone.trigger('newTrump', newTrump);
        }

        var asd = $('<div class="score">-2</div>');
        asd.css({
            left: e.pageX,
            top: e.pageY,
        }).appendTo('body').on('animationend', function () {
            $(this).remove();
        });
        Backbone.trigger('punch');
    });
};
