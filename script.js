var app = angular.module("musicApp", []);

app.controller("musicController", ["$scope", function ($scope) {
    $scope.data = [
        { Name: "Tylor Swift", Genre: "Alternative", Rating: 4 },
        { Name: "Tylor Swift", Genre: "Alternative", Rating: 5 },
        { Name: "Enrick", Genre: "Alternative", Rating: 3 },
        { Name: "Tylor Swift", Genre: "Alternative", Rating: 2 },

    ];
}]);
