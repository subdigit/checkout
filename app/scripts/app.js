'use strict';

/**
 * @ngdoc overview
 * @name checkoutApp
 * @description
 * # checkoutApp
 *
 * Main module of the application.
 */
angular
  .module('checkoutApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'catalog.service'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          catalogkeeper: ['catalog',
            function(catalogkeeper){
              return catalogkeeper.all();
            }
          ]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });