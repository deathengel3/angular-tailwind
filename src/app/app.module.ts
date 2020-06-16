import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { IndexComponent } from './index/index.component';
import {GeneralRoutes} from "./general.routes";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(GeneralRoutes, { useHash: false, enableTracing: false})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
