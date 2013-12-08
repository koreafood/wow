'use strict';

angular.module('wowApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
<<<<<<< HEAD
      //ready
=======
>>>>>>> 5e04d13570c89095406f6c5d8eef13037cb41ec3
    });
  });
