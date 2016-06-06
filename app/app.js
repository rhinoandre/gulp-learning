require('angular');
require('angular-ui-router');

var routes = require('./routes')
var TodoController = require('./modules/todo/todo.controller');
var TodoDirective = require('./modules/todo/todo.directive');

angular.module('gulpLearning', [
    'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', routes])
.controller('TodoController', ['$scope', TodoController])
.directive('todoTest', TodoDirective);

