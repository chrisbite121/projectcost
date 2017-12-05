import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error/404.component'


//modules
import { SharedModule } from './shared/shared.module'
import { MainModule } from './main/main.module'
import { SettingModule } from './setting/setting.module'

//services
import { ConfigService } from './service/config.service';
import { UrlService} from './service/url.service';
import { LogService } from './service/log.service';
import { SettingService } from './service/settings.service';
import { TableService } from './service/table.service';
import { ApiService } from './service/api.service';
import { DataStoreService } from './service/data.store.service';
import { DataContextService } from './service/data-context.service';
import { GridOptionService } from './service/grid-option.service';
import { ListService } from './service/list.service';
import { UtilService } from './service/util.service';
import { ScriptService } from './service/script.service';
// routes
import { appRoutes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    MainModule,
    SettingModule
  ],
  providers: [
    ConfigService,
    UrlService,
    LogService,
    SettingService,
    TableService,
    ApiService,
    DataStoreService,
    DataContextService,
    GridOptionService,
    ListService,
    UtilService,
    ScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
