var module = angular.module('directives');

module.directive('createTournament', function () {
    return {
        restrict: 'E',
        templateUrl: './html/Directive/createTournament.html',
        scope: {
            tempTournament: "="
        },
        controller: function ($scope) {
            $scope.isVisible = false;
            $scope.createTournament = function () {
                console.log("create");
                $scope.isVisible = true;
            };
            $scope.cancelCreateTournament = function () {
                $scope.tempTournament = {};
                $scope.isVisible = false;
            };

            $scope.save = function () {
                console.dir($scope.tempTournament);
            }
        }
    }
});