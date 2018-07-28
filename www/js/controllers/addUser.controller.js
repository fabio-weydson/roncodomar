/*global app */
'use strict';
app
.controller('adduserCtrl', ['$scope', '$timeout', '$state', '$ionicLoading', 'dataservice',
  function($scope, $timeout, $state,  $ionicLoading, dataservice){
    $scope.$on('$ionicView.enter',function(){
     $ionicLoading.hide();
    });
    

}]);