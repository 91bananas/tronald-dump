var styles = require('./less/index.less'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery'),
    preloadImages = require('./js/pre-load-images.js')(),
    url = require('./js/base-url.js');

var Timer = require('./js/timer.js'),
    GameStartView = require('./js/game-start.js'),
    TrumpView = require('./js/trump.js'),
    ScoreView = require('./js/votes.js');

var gameModel = require('./js/game-model.js'),
    timer = new Timer({
        model: gameModel
    }),
    startView = new GameStartView({
        model: gameModel
    }),
    trump = new TrumpView({
        model: gameModel
    }),
    score = new ScoreView({
        model: gameModel
    });

Backbone.trigger('newTrump', 6);

// var iv;
// var tick = function () {
//     var time = gameModel.get('time');
//     gameModel.set('time', time - 1);
//     if (gameModel.get('time') === 0) {
//         Backbone.trigger('timeUp');
//     } else {
//         setTimeout(function () {
//             tick();
//         }, 1000);
//     }
//     Backbone.trigger('clockTick');
// };
// tick = function () {
//     var sysTime = new Date()/1000;
//     var time = gameModel.get('time');
//
//     var intv = setInterval(function () {
//         var tickTime = new Date()/1000;
//         var elapsedSeconds = tickTime - sysTime;
//         var newTime = Math.round( (time - elapsedSeconds) * 10 ) / 10;
//         gameModel.set('time', newTime);
//         if (newTime <= 0) {
//             Backbone.trigger('timeUp');
//             clearInterval(intv);
//         }
//     }, 100)
// }

//stop context menu on right click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

//gloves movement
var handleGlovesMovement = require('./js/gloves.js');
handleGlovesMovement();
