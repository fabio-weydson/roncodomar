/*global app */
'use strict';
app
.controller('AppCtrl',[
	'$scope',
	'$ionicModal',
	'$timeout',
	'$ionicTabsDelegate',
	'$cordovaAppRate',
	'dataservice',
	'$rootScope',
	'appConfig',
 function(
 	$scope, 
 	$ionicModal, 
 	$timeout, 
 	$ionicTabsDelegate, 
 	$cordovaAppRate, 
 	dataservice, 
 	$rootScope, 
 	appConfig
 	) {

	document.addEventListener('deviceready', function () {

	$scope.apprate = function(){
		$cordovaAppRate.navigateToAppStore();
	};
	
	}, false);

	$scope.$on('$ionicView.beforeEnter',function(){
	
	});

	$scope.filterCat = [];
	$scope.filterCattest = {};

	$scope.filteration = function(cat){
		if($scope.filterCat.indexOf(cat) === -1){
			$scope.filterCat.push(cat);
		}else{
			$scope.filterCat.splice($scope.filterCat.indexOf(cat), 1);
		}
		$rootScope.$broadcast('filter', $scope.filterCat);
	};

$scope.facebookPage = appConfig.facebookPage;

}]);
