/*global app */
'use strict';
app
.controller('cardapioCtrl', ['$scope', '$stateParams', '$filter', 'dataservice', 'appConfig', '$ionicLoading', 'curSymbol',
  function($scope, $stateParams, $filter, dataservice, appConfig , $ionicLoading, curSymbol){
      $scope.visivel = 1;
      $scope.exibe = function(param){
        $scope.visivel = param;
      }
      $scope.$on('$ionicView.enter',function(){
   
        $ionicLoading.hide();
           
      }); 
 

}]);