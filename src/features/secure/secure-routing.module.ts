import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "dashboard",
        loadChildren: "./dashboard/dashboard.module#DashboardModule",
    },
    {
        path: "**",
        redirectTo: "dashboard",
        pathMatch: "full",
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
    providers: [],
})
export class SecureRoutingModule {
}
