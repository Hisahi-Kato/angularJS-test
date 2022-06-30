'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MainController = function MainController() {
  _classCallCheck(this, MainController);

  this.user = 'John';
};

angular.module('myApp', []);
angular.module('myApp').controller('MainController', MainController);