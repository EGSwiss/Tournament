var module = angular.module('directives');

module.directive('tournamentField', function () {
    return {
        restrict: 'E',
        templateUrl: './html/Directive/tournamentField.html',
        scope: {
            tournament: '='
        },
        controller: function ($scope) {
            $scope.allTeams = [];
            $scope.allParticipants = [];
            if ($scope.tournament.tournamenttype === 'team') {
                _.each($scope.tournament.participants, function (team) {
                    $scope.allTeams.push(team);
                });
            } else {
                _.each($scope.tournament.participants, function (participant) {
                    $scope.allParticipants.push(participant);
                });
            }
        }
    }
});