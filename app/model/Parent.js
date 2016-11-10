(function () {
  'use strcit';

  function ParentFactory () {

    function Parent (attr1, attr2) {
      this.attr1 = attr1;
      this.attr2 = attr2;
      console.log("Parent constructor: " + this.attr1 + " " + this.attr2);
    }

    Parent.prototype.method1 = function (param) {
      console.log("Called parent method1 with param: " + param);
    };

    Parent.prototype.method2 = function () {
      console.log("Called parent method2");
    };

    return Parent;
  }
  module.exports = ParentFactory;

})();
