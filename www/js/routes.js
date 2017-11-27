angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      .state('menu.home', {
        url: '/page1',
        views: {
          'side-menu21': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })

      .state('menu.map', {
        url: '/map',
        views: {
          'side-menu21': {
            templateUrl: 'templates/map.html',
            controller: 'mapCtrl'
          }
        }
      })

      .state('menu.navegador', {
        url: '/navigation',
        views: {
          'side-menu21': {
            templateUrl: 'templates/navigation.html',
            controller: 'navigationCtrl'
          }
        }
      })

      .state('menu.configuraciN', {
        url: '/config',
        views: {
          'side-menu21': {
            templateUrl: 'templates/configuraciN.html',
            controller: 'configuraciNCtrl'
          }
        }
      })

      .state('menu', {
        url: '/side-menu21',
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })

      .state('menu.arxius', {
        url: '/files',
        views: {
          'side-menu21': {
            templateUrl: 'templates/arxius.html',
            controller: 'arxiusCtrl'
          }
        }
      })

      .state('menu.whatsapp', {
        url: '/whatsapp',
        views: {
          'side-menu21': {
            templateUrl: 'templates/whatsapp.html',
            controller: 'whatsappCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/side-menu21/page1')


  });
