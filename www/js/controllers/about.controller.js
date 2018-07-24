/*global app */
'use strict';
app
.controller('aboutCtrl', [
	'$scope', 
	'$stateParams', 
	'$timeout',
	'$ionicLoading', 
	'appConfig', 
	'dataservice',
	function(
		$scope, 
		$stateParams, 
		$timeout,
		$ionicLoading,
		appConfig, 
		dataservice
		){

		$scope.imgroot = appConfig.imgserver;

		// analytics
		if(typeof analytics !== 'undefined') {
			//window.analytics.trackView('contactCtrl');
		}
		//settings.roSettigns($scope.contact);
		//$scope.contact = dataservice.contact();
		$scope.infos = {};
		dataservice.estabelecimento().then(function(d){
			 $scope.infos = d.empresa;
		});

		
				
		$scope.contactRequest = function() {
			dataservice.contact($scope.contact)
			.then(function(d){
				$scope.contact = {};
				$scope.messageShow = true;
				$scope.message = d.message;
				$timeout(function(){
					$scope.messageShow = false;
				},5000);	
			});
		};

		$scope.$on('$ionicView.enter',function(){	
			$scope.fotos = new Array();		
			var i;
			for(i=1; i<=10; ++i) {
				$scope.fotos.push(i);
				
			}
			$ionicLoading.hide();
		});	


}]);