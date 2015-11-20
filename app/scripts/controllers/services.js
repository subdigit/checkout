'use strict';

angular.module('catalog.service', [])

// A RESTful factory for retreiving catalog items from 'catalog.json'
.factory('catalog', ['$http', function($http){
  var path = 'data/catalog.json';
  var catalog = $http.get(path).then(function(resp){
    return resp.data.catalog;
  });

  var factory = {};

  factory.all = function(){
    return catalog;
  };

  factory.get = function(id){
    return catalog.then(function(){
      var entry;
      for(var i=0; i<catalog.length; i++){
        if(catalog[i].id === id){
          entry = catalog[i];
          break;
        }
      }

      return entry;
    });
  };

  return factory;
}]);
