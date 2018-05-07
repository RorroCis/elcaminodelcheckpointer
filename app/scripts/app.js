'use strict';

/**
 * @ngdoc overview
 * @name chkHighScoresApp
 * @description
 * # chkHighScoresApp
 *
 * Main module of the application.
 angular
  .module('chkHighScoresApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/
var chkHighScoresApp = angular.module('chkHighScoresApp', 
  ['angular-loading-bar', 'ngResource', 'ngAnimate', 'ui.router','ui.bootstrap', 
  'pascalprecht.translate', 'ngSanitize', 'googlechart'])
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
      cfpLoadingBarProvider.includeSpinner = false;
    }]);
chkHighScoresApp.run([
        "$state",
         function($state){
            $state.go('topscores');
         }
     ]);