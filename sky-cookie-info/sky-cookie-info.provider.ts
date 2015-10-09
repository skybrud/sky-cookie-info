interface Window {
	CookiebotCookieDeclaration: any;
}
declare module sky {
	interface ISkyCookieInfoProvider {
		license: string;
		culture: string;
		$get(): ISkyCookieInfoService;
	}
	interface ISkyCookieInfoService {
		get(license?: string): ng.IPromise<string>;
	}
}
(function() {
	'use strict';

	angular.module('skyCookieInfo').provider('skyCookieInfo', skyCookieInfoProvider);

	function skyCookieInfoProvider(): sky.ISkyCookieInfoProvider {
		var _this = this;

		_this.license = '';
		_this.culture = 'EN'; // Default is english

		_this.$get = get;

		get.$inject = ['$q', '$sce', '$location'];
		function get($q, $sce, $location) {
			var service = this;

			var defer;

			window.CookiebotCookieDeclaration = {
				InjectCookieDeclaration(text) {
					defer.resolve($sce.trustAsHtml(text));
				}
			}

			service.get = function(license = _this.license) {

				if (!defer) {
					defer = $q.defer();

					var script: any = document.createElement('script');
					script.dataset.culture = 'EN';
					script.src = 'https://policy.cookieinformation.com/' + license + '/cdreport.js?whitelabel=true&culture=' + _this.culture + '&referer=' + encodeURIComponent($location.href);
					document.body.appendChild(script);
				}
				return defer.promise;
			}

			return service;
		}

		return _this;

	}

})();