'use strict';

/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
angular.module('app')
  .run(['$rootScope', '$state', '$stateParams','Auth', function ( $rootScope,   $state,   $stateParams, Auth ) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
         $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
          if (toState.authenticate && !Auth.isLoggedIn()){
              $state.transitionTo("dashboard.home");
              event.preventDefault();
          }


      });
        $rootScope.$on('$stateChangeSuccess', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
      }
    ]
  )

  .config(
    [          '$stateProvider', '$httpProvider', '$urlRouterProvider', 'MODULE_CONFIG',
      function ( $stateProvider,$httpProvider,   $urlRouterProvider,  MODULE_CONFIG ) {


          $httpProvider.defaults.headers.common = {};
          $httpProvider.defaults.headers.post = {};
          $httpProvider.defaults.headers.put = {};
          $httpProvider.defaults.headers.patch = {};

        $urlRouterProvider
          .otherwise('/main/home');
        $stateProvider
            .state('dashboard', {
                url: '/main',
                views: {
                    '': {
                        templateUrl: 'views/layout.html',

                    },

                },
                resolve: load(['textAngular','scripts/controllers/UserController/signupctrl.js','scripts/controllers/UserController/profilectrl.js',
                    ,'scripts/controllers/UserController/signinctrl.js','scripts/controllers/UserController/homectrl.js','scripts/controllers/UserController/navbarctrl.js','scripts/controllers/UserController/eventcontroller.js','scripts/controllers/UserController/fundcontroller.js','scripts/controllers/UserController/storycontroller.js']),
                data :{title:'Dashboard'},


            })

            //Admin Dashboard
            .state('dashboard.event', {
                url: '/create_event',
                templateUrl: 'views/pages/karmyo/event.html',
                controller:'eventcontroller',
                resolve:{
                    causes: [ 'API', function(API){
                        return  API.getcauses()
                            .then(function (response) {
                                return response;
                            });
                    }],

                    cities:[ 'API', function(API){
                        return  API.getcities()
                            .then(function (response) {
                                return response;
                            });
                    }],

                    ngos:[ 'API', function(API){
                        return  API.getngos()
                            .then(function (response) {
                                return response;
                            });
                    }],


                },
                authenticate:true



            })



            //Admin Dashboard
            .state('dashboard.home', {
                url: '/home',
                templateUrl: 'views/pages/karmyo/home.html',
                controller:'homectrl',
                resolve:{
                    causes: [ 'API', function(API){
                        return  API.gethomedata()
                            .then(function (response) {
                                return response;
                            });
                    }],

                }
            })

            .state('dashboard.profile', {
                url: '/profile',
                templateUrl: 'views/pages/karmyo/profile.html',
                controller:'profilectrl',
                resolve:{
                    causes: [ 'API', function(API){
                        return  API.getprofile()
                            .then(function (response) {
                                return response;
                            });
                    }],

                },
                authenticate:true

            })

            .state('dashboard.profile.basic', {
                url: '/basic',
                templateUrl: 'views/pages/karmyo/details.html',
                authenticate:true
            })


            .state('dashboard.about', {
                url: '/aboutus',
                templateUrl: 'views/pages/karmyo/about.html',
            })

            .state('dashboard.challenge', {
                url: '/challenge',
                templateUrl: 'views/pages/karmyo/challenge.html',
            })
            .state('dashboard.newsandviews', {
                url: '/newsandviews',
                templateUrl: 'views/pages/karmyo/newsandviews.html',
            })

            .state('dashboard.why', {
                url: '/whyus',
                templateUrl: 'views/pages/karmyo/why.html',
            })

            .state('dashboard.profile.history', {
                url: '/history',
                templateUrl: 'views/pages/karmyo/history.html',
                authenticate:true
            })

            .state('dashboard.fill', {
                url: '/fill_details',
                templateUrl: 'views/pages/karmyo/initial_profile.html',
                authenticate:true
            })



            .state('dashboard.fundraiser', {
                url: '/create_fundraiser',
                templateUrl: 'views/pages/karmyo/fundraiser.html',
                controller:'fundcontroller',
                resolve:{
                    causes: [ 'API', function(API){
                        return  API.getcauses()
                            .then(function (response) {
                                return response;
                            });
                    }],

                    ngos:[ 'API', function(API){
                        return  API.getngos()
                            .then(function (response) {
                                return response;
                            });
                    }],


                },
                authenticate:true

            })

            .state('dashboard.funddetail', {
                url: '/fundraiserdetail/:_id',
                templateUrl: 'views/pages/karmyo/fundraiserdetails.html',
                controller:'funddetailcontroller',
                resolve:{
                    causes: [ 'API','$stateParams', function(API,$stateParams){
                        return  API.getfunddata($stateParams._id)
                            .then(function (response) {
                                console.log(response);
                                return response;
                            });
                    }]
                },


            })

            .state('dashboard.eventdetail', {
                url: '/eventdetails/:_id',
                templateUrl: 'views/pages/karmyo/eventdetails.html',
                controller:'eventdetailcontroller',
                resolve:{
                    causes: [ 'API','$stateParams', function(API,$stateParams){
                        return  API.geteventdata($stateParams._id)
                            .then(function (response) {
                                console.log(response);
                                return response;
                            });
                    }]
                },


            })



            .state('dashboard.story', {
                url: '/create_story',
                templateUrl: 'views/pages/karmyo/story.html',
                controller:'storycontroller',
                authenticate:true


            })

            .state('dashboard.storydetail', {
                url: '/story/:_id',
                templateUrl: 'views/pages/karmyo/storydetail.html',
                controller:'storydetailcontroller',
                resolve:{
                    causes: [ 'API','$stateParams', function(API,$stateParams){
                        return  API.getstorydata($stateParams._id)
                            .then(function (response) {
                                console.log(response);
                                return response;
                            });
                    }]
                },



            })



            //SIGNIN AND ERROR

            .state('404', {
              url: '/404',
              templateUrl: 'views/pages/karmyo/404.html',

            })
            .state('505', {
              url: '/505',
              templateUrl: 'views/pages/505.html'
            })

            .state('dashboard.signin', {
              url: '/login',
              templateUrl: 'views/pages/karmyo/signin.html',
              controller:'signin_ctrl',
              onEnter:  ['$state', 'Auth', function($state, Auth){
                    if(Auth.isLoggedIn()) {
                            $state.go('dashboard.home');
                    }
                }]})

            .state('dashboard.signup', {
              url: '/signup',
              templateUrl: 'views/pages/karmyo/signup.html',
              controller:'signup_ctrl',
              onEnter:  ['$state', 'Auth', function($state, Auth){
                    if(Auth.isLoggedIn()) {
                        $state.go('dashboard.home');
                    }
                }]})

            .state('dashboard.forgot-password', {
              url: '/forgot-password',
              templateUrl: 'views/pages/karmyo/forgot-password.html',
                onEnter:  ['$state', 'Auth', function($state, Auth){
                    if(Auth.isLoggedIn()) {
                        $state.go('dashboard.home');
                    }
                }]})

          ;


          function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                  function( $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                      promise = deferred.promise;
                    }
                    angular.forEach(srcs, function(src) {
                      promise = promise.then( function(){
                        angular.forEach(MODULE_CONFIG, function(module) {
                          if( module.name == src){
                            if(!module.module){
                              name = module.files;
                            }else{
                              name = module.name;
                            }
                          }else{
                            name = src;
                          }
                        });
                        return $ocLazyLoad.load(name);
                      } );
                    });
                    deferred.resolve();
                    return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
          }
      }
    ]
  );
