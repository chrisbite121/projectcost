import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

export class LogService {
    private _log:Array<any>
    constructor(){
        this._log = []
    }

    log(message:string, type:string, verbose:boolean = false){
        this._log.push({id: UUID.UUID(), message: message, type: type, verbose: verbose })
    }
}