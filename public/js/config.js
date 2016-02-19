(function () {
    "use strict";
    var module = angular.module('config', []);

    module.config(function ($stateProvider) {

        $stateProvider
            .state("home", {
                label: "Startseite",
                url: "/",
                templateUrl: "/html/views/home/home.html",
                controller: "homeController"
            })

            .state("tournament", {
                label: "Turniere",
                url: "/tournaments",
                templateUrl: "/html/views/tournament/tournament.html",
                controller: "tournamentController"
            });
    });
}());