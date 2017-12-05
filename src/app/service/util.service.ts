import { Injectable } from '@angular/core';

//services
import { ConfigService } from './config.service'
import { LogService } from './log.service'


//interfaces
import { IFieldSpecModel } from '../model/field-spec.model'

export class UtilService {
    constructor(private config: ConfigService,
                private logService: LogService){

    }





    generateFieldXml(fieldSpec: IFieldSpecModel): string{
        let fieldXml: string;
        switch(fieldSpec.Type) {
            case this.config.PropertyConfig._text:
                fieldXml = `<Field DisplayName="${fieldSpec.Name}" Name="${fieldSpec.Name}" Title="${fieldSpec.Name}" Type="${fieldSpec.Type}" Required="${fieldSpec.Required}"  />`
                break;
            case this.config.PropertyConfig._note:
                fieldXml = `<Field DisplayName="${fieldSpec.Name}" Name="${fieldSpec.Name}" Title="${fieldSpec.Name}" Type="${fieldSpec.Type}" Required="${fieldSpec.Required}"  />`
                break;
            case this.config.PropertyConfig._number:
                fieldXml = `<Field DisplayName="${fieldSpec.Name}" Name="${fieldSpec.Name}" Title="${fieldSpec.Name}" Type="${fieldSpec.Type}" Required="${fieldSpec.Required}" Decimal="FALSE"  />`
                break;
            case this.config.PropertyConfig._currency:
                fieldXml = `<Field DisplayName="${fieldSpec.Name}" Name="${fieldSpec.Name}" Title="${fieldSpec.Name}" Type="${fieldSpec.Type}" Required="${fieldSpec.Required}" LCID="1033" Decimal="TRUE"  />`
                break;
            case this.config.PropertyConfig._boolean:
                fieldXml = `<Field DisplayName="${fieldSpec.Name}" Name="${fieldSpec.Name}" Title="${fieldSpec.Name}" Type="${fieldSpec.Type}" Required="${fieldSpec.Required}"  />`
                break;
            case this.config.PropertyConfig._datetime:
                fieldXml = `<Field DisplayName="${fieldSpec.Name}" Name="${fieldSpec.Name}" Title="${fieldSpec.Name}" Type="${fieldSpec.Type}" Format="DateTime" Required="${fieldSpec.Required}"  />`
                break;
            case this.config.PropertyConfig._choice:
                let _choices:string = ''
                if(fieldSpec.Choices && 
                    Array.isArray(fieldSpec.Choices)) {
                    
                        //build up choices xml
                    _choices = `<CHOICES>`
                    fieldSpec.Choices.forEach((choice) => {
                        _choices.concat(`<CHOICE>`,choice.toString(),`</CHOICE>`)
                    })
                    _choices.concat(`</CHOICES>`)

                    fieldXml = `<Field DisplayName="${fieldSpec.Name}" Name="${fieldSpec.Name}" Title="${fieldSpec.Name}" Type="${fieldSpec.Type}" Format="DateTime" Required="${fieldSpec.Required}">${_choices}</Field>`
                } else {
                    //add placeholder for choice
                    _choices = `<CHOICES><CHOICE>' '</CHOICE></CHOICES>`
                    fieldXml = `<Field DisplayName="${fieldSpec.Name}" Name="${fieldSpec.Name}" Title="${fieldSpec.Name}" Type="${fieldSpec.Type}" Format="DateTime" Required="${fieldSpec.Required}">${_choices}</Field>`
                }
            

                break;
            default:
                this.logService.log('error unable to identify field type with field id: ' + String(fieldSpec.Id), 'error', false);
                // throw new Error('error unable to identify field type with field id: ' + String(fieldSpec.Id))
        }
        this.logService.log(`Adding fieldXml: ${fieldXml}`, this.config.PropertyConfig._info, true);
        return fieldXml
    }
}