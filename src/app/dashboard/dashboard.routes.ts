import {Route} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AuthenticationGuard} from "../guards/authentication.guard";


export const DashboardRouts: Route[]=[
  {
    path:'',
    component:DashboardComponent,
    canActivate: [AuthenticationGuard],
    children:[]
  }
];
