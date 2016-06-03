require('angular');
var gulpController = require('./controllers/gulpController');

angular.module('gulpLearning', [])
.controller('GulpController', ['$scope', '$timeout', gulpController]);
