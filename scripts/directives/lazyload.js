'use strict';

/**
 * @ngdoc function
 * @name app.directive:lazyload
 * @description
 * # uiScroll
 * Directive of the app
 */
angular.module('app')
  .directive('lazyLoad', ['MODULE_CONFIG','$ocLazyLoad', '$compile', function(MODULE_CONFIG, $ocLazyLoad, $compile) {
    return {
      restrict: 'A',
      compile: function (el, attrs) {
        var contents = el.contents().remove(), name;
        return function(scope, el, attrs){
          angular.forEach(MODULE_CONFIG, function(module) {
            if( module.name == attrs.lazyLoad){
              if(!module.module){
                name = module.files;
              }else{
                name = module.name;
              }
            }
          });
          $ocLazyLoad.load(name)
          .then(function(){
            $compile(contents)(scope, function(clonedElement, scope) {
              el.append(clonedElement);
            });
          });
        }
      }
    };
  }])


angular.module('app').directive('dynFbCommentBox',['$timeout', function ($timeout) {
  function createHTML(href, numposts, colorscheme, width) {
    return '<div class="fb-comments" ' +
        'data-href="' + href + '" ' +
        'data-numposts="' + numposts + '" ' +
        'data-colorsheme="' + colorscheme + '" ' +
        'data-width="' + width + '">' +
        '</div>';
  }

  return {
    restrict: 'A',
    scope: {},
    link: function postLink(scope, elem, attrs) {
      //
      // Use timeout in order to be called after all watches are done and FB script is loaded
      //
      attrs.$observe('pageHref', function (newValue) {
        var href        = newValue;
        var numposts    = attrs.numposts    || 5;
        var colorscheme = attrs.colorscheme || 'light';
        var width = attrs.width || '100%';
        elem.html(createHTML(href, numposts, colorscheme, width));
        $timeout(function () {
          if (typeof FB != 'undefined'){
            FB.XFBML.parse(elem[0]);
          }
        });
      });


    }
  };
}]);
