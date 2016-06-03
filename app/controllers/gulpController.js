module.exports = ($scope, $timeout) => {
    $scope.message = 'Angular Works!';
    $timeout(function(){
        $scope.message = 'And it\'s working';
    }, 3000);
};
