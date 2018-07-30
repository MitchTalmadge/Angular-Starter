import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { LoaderModule } from "./loader/loader.module";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HeaderModule,
        FooterModule,
        LoaderModule,
    ],
    declarations: [AppComponent],
    exports: [],
    providers: [],
})
export class AppBootstrapModule {
}
