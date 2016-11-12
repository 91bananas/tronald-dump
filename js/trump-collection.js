var Backbone = require('backbone'),
    phrases = [
        'nasty woman',
        'GRAB THEM BY THE PUSSY',
        'rapists',
        'BOMB THE HELL OUT OF ISIS',
        'Build the Wall!',
        'email server!',
        'this is rigged!',
        'wrong! WRONG!',
        'liberal media!',
        'Bad Hombre',
        'YUGEEEEEEE'
    ],
    Collection = Backbone.Collection.extend({
        phrases: phrases
    });

module.exports = new Collection([{
    url: '6',
    power: 3,
    css: 'right: -10px;'
}, {
    url: '3',
    power: 2,
    css: 'right: 100px;'
}, {
    url: '2',
    power: 1,
    css: 'right: 70px;'
}, {
    url: '4',
    power: 4,
    css: 'right: 110px;'
}, {
    url: '7',
    power: 5,
    css: 'right: 20px;'
}, {
    url: '1',
    power: 5,
    css: 'right: -70px;'
}, {
    url: '5',
    power: '3',
    css: 'right: 40px;'
}]);
