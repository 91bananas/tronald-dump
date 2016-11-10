var base = require('./base-url.js');

module.exports = function () {
    for (var i = 1; i < 8; i++) {
        var v = new Image();
        v.src = base + i + '.png';
    }
};
