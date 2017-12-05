import { SettingComponent } from './setting.component';
import { SettingMainComponent } from './setting-main/setting-main.component'

const settingSubRoutes = [

    {
        path: 'main',
        component: SettingMainComponent
    },
    {
        path: '',
        component: SettingMainComponent
    }    
]

export const settingRoute = [
    {
        path: 'settings',
        component: SettingComponent,
        children: settingSubRoutes
    }
]