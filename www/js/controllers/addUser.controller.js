/*global app */
'use strict';
app
.controller('adduserCtrl', ['$scope', '$timeout', '$state', '$ionicLoading',
  function($scope, $timeout, $state,  $ionicLoading){
    $scope.$on('$ionicView.enter',function(){
     $ionicLoading.hide();
    });
    

}]);