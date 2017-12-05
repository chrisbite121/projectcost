import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class UrlService {
    private _hostUrlTitle: string = 'SPHostUrl';
    private _appUrlTitle: string = 'SPAppWebUrl';

    constructor(@Inject(DOCUMENT) private document: Document){}

    get hostUrlName() {
        return this._hostUrlTitle;
    }

    get appUrl() {
        return this._appUrlTitle;
    }

    
    getQueryStringParameter(urlParameterKey):Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (this.document.URL &&
                this.document.URL.length > 0 &&
                this.document.URL.indexOf('?') > -1) {
        
                var params = this.document.URL.split('?')[1].split('&');
                var strParams = '';
                if (params && params.length > 0) {
                    for (var i = 0; i < params.length; i = i + 1) {
                        var singleParam = params[i].split('=');
                        if (singleParam[0] == urlParameterKey)
                            //trim off # part of url that is used by angular
                            if (urlParameterKey == 'SPAppWebUrl' && singleParam[1].split('#')) {
                                resolve(decodeURIComponent(singleParam[1].split('#')[0]))
                            } else {
                                resolve(decodeURIComponent(singleParam[1]));
                            }
                    }
                }
            }
            
            resolve('')
        })

    }
}