import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//components
import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/components/employee-details.component";
import { EventsListComponent } from "./events/components/event-list.component"
import { EventDetailsComponent } from "./events/components/event-details.component";
import { JphPostsListComponent } from "./jph/components/jph-posts-list.component";

//pipes
import { FirstLetterCapitalPipe } from "./events/pipes/first-letter-capital.pipes";
import { FilterByPipe } from "./events/pipes/filter-by.pipe";

//services
import { SepEventsService } from "./events/services/sep-events.service";
import { JphService } from "./jph/services/jph.service";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    exports: [],
    //components, pipes and directives declarations go here
    declarations: [
        AppComponent,
        EmployeesListComponent,
        EmployeeDetailsComponent,
        EventsListComponent,
        EventDetailsComponent,
        JphPostsListComponent,
        FirstLetterCapitalPipe,
        FilterByPipe
    ],
    //services go in providers
    providers: [SepEventsService, JphService],
    bootstrap: [AppComponent]
})
export class AppModule {

}