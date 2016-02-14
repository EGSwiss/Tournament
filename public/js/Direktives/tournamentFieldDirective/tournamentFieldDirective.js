var module = angular.module('directives');

module.directive('tournamentField', function () {
    return {
        restrict: 'E',
        templateUrl: './html/Directive/tournamentField.html',
        scope: {
            ngRepeat: '='
        },
        controller: function ($scope) {
            console.dir($scope);
        }
    }
});