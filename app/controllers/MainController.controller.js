(function () {
  'use strict';

  MainController.$inject = ['Parent', 'Child'];

  function MainController (Parent, Child) {
    var ctrl = this;
    
    ctrl.init = function () {
      var parent = new Parent("Helo", "world");
      var child = new Child ("Hello", "world", "Sergio");
      parent.method1("testing parent call");
      child.method1("testing child call");
      parent.method2();
      child.method2();
    };
  }

  module.exports = MainController;

})();
