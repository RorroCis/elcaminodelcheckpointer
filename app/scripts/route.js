'use strict';

angular.module('chkHighScoresApp').config(function ($stateProvider, $urlRouterProvider, $qProvider) {
 
  $stateProvider.state('topscores', {
    url: '/',
    templateUrl: 'views/topscores.html'
  });

  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  });

  $stateProvider.state('error', {
    url: '/error',
    templateUrl: 'views/error.html'
  });

  $stateProvider.state('stats', {
    url: '/stats',
    templateUrl: 'views/stats.html'
  });

  $urlRouterProvider.otherwise("/");

  $qProvider.errorOnUnhandledRejections(false);
});

