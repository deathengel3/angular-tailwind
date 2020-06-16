import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./index.component";
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class IndexModule { }
