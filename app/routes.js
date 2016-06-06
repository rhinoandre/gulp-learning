module.exports = ($stateProvider, $urlRouterProvider) => {
    
    $stateProvider
        .state('todo', {
            template: '<todo-test></todo-test>'
        });
}