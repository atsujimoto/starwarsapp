/* globals angular */

var app = angular.module('StarWarsCtrls', ['StarWarsServices']);

app.controller('FilmsCtrl', ['$scope', 'Films', function($scope, Films) {
    $scope.movidId = 1;
    $scope.films = [];
    $scope.loading = false;

    $scope.getAll = function() {
        $scope.loading = true;

        Films.query(function success(data) {
            $scope.films = data.results;
            $scope.loading = false;
        }, function error(data) {
            console.log(data);
            $scope.loading = false;
        });
    };

    $scope.getMovie = function(id) {
        $scope.loading = true;

        Films.get({ id: id },
            function success(data) {
                $scope.films = [data];
                $scope.loading = false;
            },
            function error(data) {
                console.log(data);
                $scope.loading = false;
            });
    };
}]);
