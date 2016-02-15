(function () {
    "use strict";
    var module = angular.module("controllers");

    module.controller('createTournament', function ($scope) {

        $scope.isAddable = false;
        $scope.createTournament = function () {
            $scope.isAddable = true;

            console.dir($scope.tournaments);

        }

    });
}());