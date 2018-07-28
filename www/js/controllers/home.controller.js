/*global app */
'use strict';
app
.controller('homeCtrl', [
	'$scope', 
	'$timeout', 
	'$state', 
function(
	$scope, 
	$timeout, 
	$state
	){
	$timeout(function() {
      $state.go('app.addUser');
    }, 3000);
}]);
