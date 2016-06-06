module.exports = $scope => {
    $scope.todos = [
        {
            task: 'Study Gulp',
            done: false
        },
        {
            task: 'Create gulp tasks',
            done: false
        },
        {
            task: 'Execute tasks',
            done: false
        },
        {
            task: 'Be happy!!',
            done: false
        }
    ];
    
    $scope.setDone = function(todo){
        todo.done = true;
    };
}