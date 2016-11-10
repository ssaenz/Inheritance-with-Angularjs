(function () {
  'use strict';

  var angular = require('angular');

  angular.module('InheritanceTest')
    .factory ("Parent", require('./Parent'))
    .factory ("Child", require('./Child'));

})();
