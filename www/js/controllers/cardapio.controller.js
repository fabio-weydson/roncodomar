/*global app */
'use strict';
app
.controller('cardapioCtrl', ['$scope', '$stateParams', 'dataservice', 'appConfig', '$ionicLoading',,
  function($scope, $stateParams, dataservice, appConfig , $ionicLoading){
      $scope.visivel = 1;
      $scope.exibe = function(param){
        $scope.visivel = param;
      }
      $scope.$on('$ionicView.enter',function(){
   
        $ionicLoading.hide();
           
      }); 
 

}]);