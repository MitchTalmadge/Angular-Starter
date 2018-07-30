import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {AppBootstrapModule} from "./app/app-bootstrap.module";
import {AppComponent} from "./app/app.component";
import {CoreModule} from "./core/core.module";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,

        AppBootstrapModule,
    ],
    declarations: [],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
