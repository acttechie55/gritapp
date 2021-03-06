// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'views/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.lists', {
      url: '/lists',
      views: {
        'tab-lists': {
          templateUrl: 'views/lists/lists.html',
          controller: 'ListsCtrl'
        }
      }
    })
    .state('tab.tasks', {
      url: '/tasks',
      views: {
        'tab-tasks': {
          templateUrl: 'views/tasks/tasks.html',
          controller: 'TasksCtrl'
        }
      }
    })
    .state('tab.task-detail', {
      url: '/tasks/:taskId',
      views: {
        'tab-task-detail': {
          templateUrl: 'views/tasks/task-detail/task-detail.html',
          controller: 'TaskDetailCtrl'
        }
      }
    })
     .state('tab.list-detail', {
      url: '/lists/:listId',
      views: {
        'tab-list-detail': {
          templateUrl: 'views/lists/list-detail/list-detail.html',
          controller: 'ListDetailCtrl'
        }
      }
    })
    
  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'views/settings/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});