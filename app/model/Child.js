(function () {
  'use strcit';

  ChildFactory.$inject = ['Parent'];
  function ChildFactory (Parent) {

    function Child (attr1, attr2, attr3) {
      Parent.call(this, attr1, attr2);
      this.attr3 = attr3;
      console.log ("Child constructor with attrs: " + this.attr1 + " " + this.attr2 + " " + this.attr3);
    }

    Child.prototype = Object.create (Parent.prototype);

    Child.prototype.method1 = function (param) {
      console.log("Called child method1 with param: " + param);
      Parent.prototype.method1.call(this, param);
    };

    Child.prototype.method2 = function () {
      console.log("Override method2 on child");
    };

    return Child;
  }

  module.exports = ChildFactory;

})();
