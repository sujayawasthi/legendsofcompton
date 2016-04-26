'use strict';

/**
 * @ngdoc overview
 * @name antest1App
 * @description
 * # antest1App
 *
 * Main module of the application.
 */
 angular
 .module('antest1App', [
  'ngResource',
  'ui.router'
  ])
 .config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('view1',
    {url :'/',
    views :{'main@about': {
      templateUrl : 'views/view1.html'
      ,controller  : 'AboutCtrl'                  
    }
  }


}

);
  
});
