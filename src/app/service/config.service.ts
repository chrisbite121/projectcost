import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    public AppConfig: any;
    public ListConfig: any;
    public GridConfig: any;
    public PropertyConfig: any;
    
    constructor(){

        this.AppConfig = {
            appDetails : {
                appTitle: 'Project Costs'
            }
        }

        this.ListConfig = {
            settings: {
                listName: 'Settings',
                contextType: this.PropertyConfig._appWeb,
                fields: [
                    { Id: 1, Name: "config", Type: this.PropertyConfig._note, Required: this.PropertyConfig._false },
                ]
            },
            costApp: {
                listName: 'Project Cost Data',
                contextType: this.PropertyConfig._hostWeb,
                fields: [
                    { Id: 1, Name: "ItemId", Type: this.PropertyConfig._text, Required: this.PropertyConfig._false },
                    { Id: 2, Name: "FundingSource", Type: this.PropertyConfig.choice, choices: [ this.PropertyConfig._forecast, this.PropertyConfig._actual ],Required: this.PropertyConfig._false },
                    { Id: 4, Name: "Year", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 5, Name: "January", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 6, Name: "Febuary", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 7, Name: "March", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 8, Name: "April", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 9, Name: "May", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 10, Name: "June", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 11, Name: "July", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 12, Name: "August", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 13, Name: "September", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 14, Name: "October", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 15, Name: "November", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                    { Id: 16, Name: "December", Type: this.PropertyConfig._number, Required: this.PropertyConfig._false },
                ]
            }
        }

        this.PropertyConfig = {
            _hostWeb: 'hostWeb',
            _appWeb: 'appWeb',
            _false: "FALSE",
            _true: "TRUE",
            _number: "Number",
            _text: "Text",
            _currency: "Currency",
            _note: "Note",
            _boolean: "Boolean",
            _choice: "Choice",
            _error: 'error',
            _info: 'info',
            _datetime: 'DateTime',
            _forecast: 'Forecast',
            _actual: 'Actual'
        }
    }    

}