/*global app */
'use strict';
app
.controller('aboutCtrl', [
	'$scope', 
	'$stateParams', 
	'$timeout',
	'$ionicLoading', 
	'appConfig',
	function(
		$scope, 
		$stateParams, 
		$timeout,
		$ionicLoading,
		appConfig
		){
		$scope.$on('$ionicView.enter',function(){	
			$scope.fotos = new Array();		
			var i;
			for(i=1; i<=10; ++i) {
				$scope.fotos.push(i);
				
			}
			$ionicLoading.hide();
		});	


}]);