import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecureGuard } from "./guards/secure.guard";
import { WelcomeGuard } from "./guards/welcome.guard";

const routes: Routes = [
    {
        path: "",
        loadChildren: "./features/welcome/welcome.module#WelcomeModule",
        canActivate: [WelcomeGuard],
    },
    {
        path: "secure",
        loadChildren: "./features/secure/secure.module#SecureModule",
        canActivate: [SecureGuard],
    },
    {
        path: "**",
        redirectTo: "/",
        pathMatch: "full",
    },
];

/**
 * The root routing module. Other routes can be found next to their respective features.
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        SecureGuard,
        WelcomeGuard,
    ],
    declarations: [],
})
export class AppRoutingModule {
}
