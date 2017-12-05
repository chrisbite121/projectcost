import { Injectable } from '@angular/core';

//config objects
import { ConfigService } from './config.service'

export class SettingService {
    private _appTitle: string;
    constructor(private config : ConfigService){
        this._appTitle = config.AppConfig.appTitle;
        console.log(this.appTitle)
    }

    get appTitle () {
        return this._appTitle
    }

}