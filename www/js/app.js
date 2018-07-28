'use strict';
angular.module('templates', []);
var app = angular.module('restaurant',
  ['ionic', 'underscore', 'templates', 'angularMoment', 'angular.filter', 'ionic-datepicker', 'ionic-timepicker', 'ngAnimate', 'ngCordova', 'angular-cache']);
app.value('convert', window.convert)
app.value('geolib', window.geolib)
app.value('_', window._)

  app.run(function($ionicPlatform, $rootScope, $ionicLoading, settings, dataservice, $state,$ionicPopup) {
    $ionicPlatform.ready(function() {
       navigator.splashscreen.hide();
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

    

    });


    // loader event
    $rootScope.$on('$stateChangeStart',
      function(event, toState ){

        $rootScope.$broadcast('showloader');
        if (toState.name==='app.thankyou') {
          $ionicLoading.hide();
        }
    });
    $rootScope.$on('showloader', function () {
      $ionicLoading.show({
        template: 'Carregando...'
      });
    });
    $rootScope.$on('hideloader', function () {
      $ionicLoading.hide();
    });


    // Disable BACK button on home
    $ionicPlatform.registerBackButtonAction(function(event) {
      if($state.current.name == "app.userPage") { // your check here
        $ionicPopup.confirm({
          title: 'Sair?',
          template: 'Deseja realmente sair?'
        }).then(function(res) {
          if (res) {
            ionic.Platform.exitApp();
          }
        })
      }
      else {
        navigator.app.backHistory();
      }
    }, 100);
  })


  // VIEWS AND THEIR CONTROLLERS
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl : 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl : 'templates/home.html',
            controller:'homeCtrl'
          }
        }
      })
      .state('app.addUser', {
        url: '/adduser',
        views: {
          'menuContent': {
            templateUrl : 'templates/addUser.html',
            controller:'adduserCtrl'
          }
        }
      })
       .state('app.about', {
        url: '/about',
        views: {
          'menuContent': {
            templateUrl : 'templates/about.html',
            controller:'aboutCtrl'
          }
        }
      })
      .state('app.cardapio', {
        url: '/cardapio',
        views: {
          'menuContent': {
            templateUrl : 'templates/cardapio.html',
            controller:'cardapioCtrl'
          }
        }
      })
    
        // if none of the above states are matched, use this as the fallback

    $urlRouterProvider.otherwise('/app/adduser');
    
  })

  .config(function ($cordovaAppRateProvider) {
    // configration for app rate
    document.addEventListener('deviceready', function () {

    }, false);
  })

var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

  //  .config(function (CacheFactoryProvider) {
  //   angular.extend(CacheFactoryProvider.defaults, { maxAge: 24 * 60 * 60 * 1000,  storageMode: 'localStorage'  });
  // })
