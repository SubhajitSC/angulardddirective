'use strict';

/**
 * @ngdoc overview
 * @name angtestApp
 * @description
 * # angtestApp
 *
 * Main module of the application.
 */
angular
  .module('angtestApp', [
    'ngRoute',
    'custom-directive-dropdown'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
