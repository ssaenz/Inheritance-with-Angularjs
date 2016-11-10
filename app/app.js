(function() {

  angular.module('InheritanceTest', ['ui.bootstrap'])
        //Optional configuration
        .config(function($httpProvider) {
          //Enable cross domain calls
          $httpProvider.defaults.useXDomain = true;
        });
  require('./model');
  require('./controllers');

})();
