'use strict';

/**
 * @ngdoc function
 * @name checkoutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the checkoutApp
 */
angular.module('checkoutApp')
 .controller('MainCtrl', ['$scope', '$uibModal', 'catalogkeeper', 'catalog', function($scope, $uibModal, catalogkeeper, catalog) {
  	$scope.catalogkeeper = catalogkeeper;
  	$scope.subtotal = 0;
  	$scope.total = 0;
  	$scope.tax = 7.2;
  	$scope.purchases = [];
  	$scope.counters = {};

  	$scope.getTax = function(){
  		return $scope.tax;
  	}

  	$scope.getCatalogItem = function(id){
  	  // Yes, this is really not how to do this.  Ideally, this should be fetched from the factory service, but I ran into a bit of a problem figuring that out.  So for now, something workable.
      var entry;
      for(var i=0; i<$scope.purchases.length; i++){
        if($scope.purchases[i].id === id){
          entry = $scope.purchases[i];
          break;
        }
      }

      return entry;
  	}

  	$scope.getCount = function(itemid){
  		var count = $scope.counters[itemid];
  		if(count === undefined) count = 0;
  		return count;
  	}

  	$scope.purchaseItem = function(item){
  		$scope.purchases.push(item);
  		var count = $scope.getCount(item.id);
  		if(count === undefined) count = 0;
  		count++;
  		$scope.counters[item.id] = count;
  		$scope.subtotal += item.price;
  	}

  	$scope.clearPurchases = function(){
  		$scope.purchases = [];
  		$scope.counters = {};
  		$scope.subtotal = 0;
  	}

  	$scope.removePurchase = function(index){
  		var item = $scope.purchases[index];
		$scope.purchases.splice(index, 1);
  		var count = $scope.getCount(item.id);
  		if(count === undefined) count = 0;
  		else count--;
  		$scope.counters[item.id] = count;
  		$scope.subtotal -= item.price;
  	}

  	$scope.generateReceipt = function(){
	    var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'receipt.html',
			controller: 'ReceiptCtrl',
			size: 'lg',
			resolve: {
				register: function () {
					return $scope;
				},
				purchases: function () {
					return $scope.purchases;
				},
				counters: function () {
					return $scope.counters;
				}
			}
		});

		modalInstance.result.then(function (action) {
    		$scope.action = action;
		}, function () {
		});
	};
 }]);


angular.module('checkoutApp').controller('ReceiptCtrl', function ($scope, $uibModalInstance, register, purchases, counters) {
  $scope.register = register;
  $scope.purchases = purchases;
  $scope.counters = counters;

  $scope.print = function () {
    $uibModalInstance.close('print');
  };

  $scope.email = function () {
    $uibModalInstance.close('email');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});