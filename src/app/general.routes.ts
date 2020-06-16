import {Route} from "@angular/router";
import {IndexRoutes} from "./index/index.routes";
import {DashboardRouts} from "./dashboard/dashboard.routes";


export const GeneralRoutes: Route[] = [...DashboardRouts, ...IndexRoutes];
