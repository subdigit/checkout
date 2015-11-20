'use strict';

/**
 * @ngdoc function
 * @name checkoutApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the checkoutApp
 */
angular.module('checkoutApp')
  .controller('CatalogCtrl', ['$scope', 'catalogkeeper', function($scope, catalogkeeper) {
  	$scope.catalogkeeper = catalogkeeper;
  }]);
