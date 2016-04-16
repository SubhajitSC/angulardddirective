'use strict';

/**
 * @ngdoc function
 * @name angtestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angtestApp
 */
angular.module('angtestApp')
  .filter('unique', function() {
  return function(collection, keyname) {
    var output = [],
      keys = [];

    angular.forEach(collection, function(option) {
      var key = option[keyname];
      if(keys.indexOf(key) === -1) {
        keys.push(key);
        output.push(option);
      }
    });

    return output;
  };
})

.controller('MainCtrl', function ($scope) {
    $scope.testArray = [
                        {
                          "content_type" : "dd1",
                          'option' : 'SFF1233F',
                          'name':  "Mr. John Doe",
                          'image': 'images/1.jpg',
                          'carimg': 'images/Fast-Cars-5.jpg'

                        },
                        {
                          "content_type" : "dd1",
                          'option' : 'SFF1233F',
                          'name':  "Mr. Bob Doe",
                          'image': 'images/1.jpg',
                          'carimg': 'images/c4.jpg'

                        },
                        {
                          "content_type" : "dd1",
                          'option' : 'SFF1233F',
                          'name':  "Mr. No Doe",
                          'image': 'images/1.jpg',
                          'carimg': 'images/c1.jpg'

                        },
                        {
                          "content_type" : "dd1",
                          'option' : 'SFF1233F',
                          'name':  "Mr. Kyle Doe",
                          'image': 'images/1.jpg',
                          'carimg': 'images/c2.jpg'

                        },
                        {
                          "content_type" : "dd1",
                          'option' : 'SFF1233F',
                          'name':  "Mr. Krish Doe",
                          'image': 'images/1.jpg',
                          'carimg': 'images/c3.jpg'

                        },
                        {
                          "content_type" : "dd1",
                          'option' : 'SFF1233F',
                          'name':  "Mr. Noone Doe",
                          'image': 'images/1.jpg',
                          'carimg': 'images/Fast_Cars_Wallpaper_061.jpeg'

                        },
                        {
                          "content_type" : "dd2",
                          'option': 'ACF1233F',
                          'name':  "Mr. Pat Doe",
                          'image': 'images/2.jpg',
                          'carimg': 'images/Fast_Cars_Wallpaper_061.jpeg'
                        }];



  });
