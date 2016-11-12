var Backbone = require('backbone'),
    phrases = {
        aggressive: [
            'nasty woman',
            'GRAB THEM BY THE PUSSY',
            'rapists',
            'BOMB THE HELL OUT OF ISIS',
            'Build the Wall!',
            'email server!'
        ],
        submissive: [
            'this is rigged!',
            'wrong! WRONG!',
            'liberal media!',
            'Bad Hombre',
            'YUGEEEEEEE'
        ]
    },
    Collection = Backbone.Collection.extend({
        phrases: phrases
    });

module.exports = new Collection([{
    url: '6',
    power: 3,
    css: 'right: -10px;',
    phrase: 'submissive'
}, {
    url: '3',
    power: 2,
    css: 'right: 100px;',
    phrase: 'submissive'
}, {
    url: '2',
    power: 1,
    css: 'right: 70px;',
    phrase: 'submissive'
}, {
    url: '4',
    power: 4,
    css: 'right: 110px;',
    phrase: 'aggressive'
}, {
    url: '7',
    power: 5,
    css: 'right: 20px;',
    phrase: 'aggressive'
}, {
    url: '1',
    power: 5,
    css: 'right: -70px;',
    phrase: 'aggressive'
}, {
    url: '5',
    power: '3',
    css: 'right: 40px;',
    phrase: 'aggressive'
}]);
