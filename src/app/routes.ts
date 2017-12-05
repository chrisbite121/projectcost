import { Routes } from '@angular/router';
import { Error404Component } from './error/404.component'

export const appRoutes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },  
    { path: '404', component: Error404Component },
    { path: '**', component: Error404Component }

]