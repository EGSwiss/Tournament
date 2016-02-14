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
            id: 1,
            organisator: $scope.allParticipant[0],
            creationDate: "02.02.2016",
            date: "20.03.2016",
            game: "League of Legends",
            title: "Das erste grosse LOL Turnier auf EGSwiss!!!",
            description: "Ein kleines erstes LOL Turnier auf EGSwiss. Alle Sind herzlich eingeladen mitzuspielen!",
            participantCount: 4,                /*anzahl teilnehmer*/
            tournamenttype: "team",
            randomAllocation: false,            /*false: custom allocation by organisator*/
            price: "NO PRICE IN THIS TEST",
            participants: [
                {
                    id: 1,
                    name: "EGS",
                    members: [
                        {
                            id: 1,
                            name: "John"
                        },
                        {
                            id: 2,
                            name: "Peter"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "TGW",
                    members: [
                        {
                            id: 3,
                            name: "Trish"
                        },
                        {
                            id: 4,
                            name: "hensi"
                        }
                    ]
                }
            ]
        }
    ];

});