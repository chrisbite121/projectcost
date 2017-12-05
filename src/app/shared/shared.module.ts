import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { 
  MatButtonModule,
  MatTabsModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
  } from '@angular/material';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      BrowserModule,
      BrowserAnimationsModule
  ],
  declarations: [
  ],
  exports: [
      CommonModule,
      BrowserModule,
      MatButtonModule,
      MatTabsModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
  ]
})
export class SharedModule {

}