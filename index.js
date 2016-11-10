var styles = require('./less/index.less'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery'),
    preloadImages = require('./js/pre-load-images.js')(),
    url = require('./js/base-url.js');

var Timer = require('./js/timer.js');
var allTrumps = require('./js/trump-collection.js');
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
    if (gameModel.get('time') === 0) {
        gameModel.set('running', false);
    } else {
        setTimeout(function () {
            tick();
        }, 1000);
    }
};
var GameStartView = require('./js/game-start.js');
var startView = new GameStartView({
    model: gameModel
});
//stop context menu on right click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);


//gloves movement
var handleGlovesMovement = require('./js/gloves.js');
handleGlovesMovement();
