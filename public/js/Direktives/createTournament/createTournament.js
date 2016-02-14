var module = angular.module('directives');

module.directive('createTournament', function () {
    return {
        restrict: 'E',
        templateUrl: './html/Directive/createTournament.html',
        scope: {
            ngRepeat: '='
        },
        controller: function ($scope) {
            console.dir($scope);
        }
    }
});