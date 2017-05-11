/* globals angular */

var app = angular.module('StarWarsServices', []);

app.factory('Films', ['$resource', function($resource) {
    return $resource('http://swapi.co/api/films/:id', {}, {
        query: { isArray: false }
    });
}]);
