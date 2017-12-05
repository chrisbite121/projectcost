import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

//components
import { SettingComponent } from './setting.component'

import { SettingMainComponent } from './setting-main/setting-main.component';

//routes
import { settingRoute } from './setting.routes'

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(settingRoute)
    ],
    declarations: [
        SettingComponent,
        SettingMainComponent
    ],
    exports: [

    ]
})
export class SettingModule {

}