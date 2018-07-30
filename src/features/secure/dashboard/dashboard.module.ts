import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    imports: [DashboardRoutingModule],
    exports: [],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }
