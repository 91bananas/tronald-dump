var styles = require('./less/index.less'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery'),
    preloadImages = require('./js/pre-load-images.js')(),
    url = require('./js/base-url.js');

var Timer = require('./js/timer.js'),
    GameStartView = require('./js/game-start.js'),
    TrumpView = require('./js/trump.js');

var gameModel = require('./js/game-model.js'),
    timer = new Timer({
        model: gameModel
    }),
    startView = new GameStartView({
        model: gameModel
    }),
    trump = new TrumpView();

Backbone.trigger('newTrump', 6);

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
Backbone.on('tick', tick);
//stop context menu on right click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

//gloves movement
var handleGlovesMovement = require('./js/gloves.js');
handleGlovesMovement();
