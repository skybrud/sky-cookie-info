(function () {
    'use strict';
    angular.module('skyCookieInfo', ['ngSanitize']);
})();
(function () {
    'use strict';
    angular.module('skyCookieInfo').provider('skyCookieInfo', skyCookieInfoProvider);
    function skyCookieInfoProvider() {
        var _this = this;
        _this.license = '';
        _this.culture = 'EN'; // Default is english
        _this.$get = get;
        get.$inject = ['$q', '$sce', '$location'];
        function get($q, $sce, $location) {
            var service = this;
            var defer;
            window.CookiebotCookieDeclaration = {
                InjectCookieDeclaration: function (text) {
                    defer.resolve($sce.trustAsHtml(text));
                }
            };
            service.get = function (license) {
                if (license === void 0) { license = _this.license; }
                if (!defer) {
                    defer = $q.defer();
                    var script = document.createElement('script');
                    script.dataset.culture = 'EN';
                    script.src = 'https://policy.cookieinformation.com/' + license + '/cdreport.js?whitelabel=true&culture=' + _this.culture + '&referer=' + encodeURIComponent($location.href);
                    document.body.appendChild(script);
                }
                return defer.promise;
            };
            return service;
        }
        return _this;
    }
})();
(function () {
    'use strict';
    angular.module('skyCookieInfo').directive('skyCookieInfo', skyCookieInfoDirective);
    function skyCookieInfoDirective() {
        var directive = {
            restrict: 'E',
            controller: skyCookieInfoController,
            template: '<div ng-bind-html="skyCookieInfoCtrl.text"></div>',
            controllerAs: 'skyCookieInfoCtrl',
            scope: {}
        };
        skyCookieInfoController.$inject = ['skyCookieInfo'];
        function skyCookieInfoController(skyCookieInfo) {
            var _this = this;
            skyCookieInfo.get().then(function (text) { return _this.text = text; });
        }
        return directive;
    }
})();
