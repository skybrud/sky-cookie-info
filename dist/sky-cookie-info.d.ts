interface Window {
    CookiebotCookieDeclaration: any;
}
declare module sky {
    interface ISkyCookieInfoProvider {
        license: string;
        $get(): ISkyCookieInfoService;
    }
    interface ISkyCookieInfoService {
        get(license?: string): ng.IPromise<string>;
    }
}
