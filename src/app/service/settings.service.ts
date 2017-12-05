import { Injectable } from '@angular/core';

//config objects
import { AppConfig } from '../config/app.config'
const { appDetails } = AppConfig;

export class SettingService {
    private _appTitle: string;
    constructor(){
        this._appTitle = appDetails.appTitle;
        console.log(this.appTitle)
    }

    get appTitle () {
        return this._appTitle
    }

}