/*global app */
'use strict';
app
.controller('adduserCtrl', ['$scope', '$timeout', '$state', '$ionicLoading', 'dataservice',
  function($scope, $timeout, $state,  $ionicLoading, dataservice){
  


    // clear 
    //$scope.estabelecimento = localStorage.getItem('estabelecimento');
    
    // redirect if user present
    if ($scope.estabelecimento) {
      //$state.go('app.dishitems');
    }
    // else enter estabelecimento
    $scope.createUser = function(estabelecimento) {
      localStorage.setItem('estabelecimento', $scope.estabelecimento);
      $state.go('app.dishitems');
    };

    

    if(typeof analytics !== 'undefined') {
      window.analytics.trackView('adduserCtrl');
    }
    $scope.$on('$ionicView.enter',function(){

   var height =  window.screen.height-250;
    $scope.mapheight = {
      'bottom': "-" + height + "px"
  };
   console.log(height);
     $ionicLoading.hide();
    });
    

}]);