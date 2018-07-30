import {Component} from "@angular/core";
import {LoaderService} from "../../core/services/loader.service";

@Component({
    selector: "app-loader",
    templateUrl: "loader.component.html",
    styleUrls: ["loader.component.css"],
})
export class LoaderComponent {

    public loading: boolean;

    constructor(loaderService: LoaderService) {
        loaderService.isLoading().subscribe((loading) => this.loading = loading);
    }

}
