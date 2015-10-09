# cookie-info

Angular-component to show cookie-information from cookieinformation.dk

Setup your license key (and optionally culture) at config time in the provider and simply put the cookie-info component where you want to use it.

```js
angular.module('yourApp',['skyCookieInfo']).config(['skyCookieInfoProvider',function(skyCookieInfoProvider){
	skyCookieInfoProvider.license = 'license-code-here';
	skyCookieInfoProvider.culture = 'EN';
}]);
```

```html
<sky-cookie-info></sky-cookie-info>
```


### Credits

This module is made by the Frontenders at [skybrud.dk](http://www.skybrud.dk/). Feel free to use it in any way you want. Feedback, questions and bugreports should be posted as issues. Pull-requests appreciated! 