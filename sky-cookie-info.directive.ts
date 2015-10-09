(function() {
	'use strict';

	angular.module('skyCookieInfo').directive('skyCookieInfo',skyCookieInfoDirective);

	function skyCookieInfoDirective() {
		var directive = {
			restrict: 'E',
			controller: skyCookieInfoController,
			templateUrl:'/sky-cookie-info/sky-cookie-info.template.html',
			controllerAs:'skyCookieInfoCtrl',
			scope:{}
		};

		skyCookieInfoController.$inject = ['skyCookieInfo']
		function skyCookieInfoController(skyCookieInfo) {
			var _this = this;

			skyCookieInfo.get().then(text => _this.text = text);

		}


		return directive;
	}

})();