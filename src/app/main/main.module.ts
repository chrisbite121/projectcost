import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

//components
import { MainComponent } from './main.component';
import { BudgetComponent } from './budget/budget.component';
import { NavbarMainComponent } from './navbar-main/navbar-main.component'

//routes
import { mainRoutes } from './main.routes'

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [
    MainComponent,
    BudgetComponent
  ]
})
export class MainModule { }
