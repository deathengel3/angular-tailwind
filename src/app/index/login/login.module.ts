import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
import {LoginRoutes} from "./login.routes";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
