/**
 * Created by Michael on 13.02.2016.
 */
var module = angular.module('egswiss_tournament', ["directives"]);

module.controller('MainController', function ($scope) {
    $scope.allParticipant  = [
        {
            name: "Jonney",
            id: 1
        },
        {
            name: "Jessica",
            id: 2
        },
        {
            name: "MrCannonball",
            id: 3
        },
        {
            name: "Googletester",
            id: 4
        },
        {
            name: "Someday12",
            id: 5
        },
        {
            name: "ggfdgdfg",
            id: 6
        }
    ];

    $scope.tournaments = [
        {
            name: 1
        },
        {
            name: 2
        }
    ];

});