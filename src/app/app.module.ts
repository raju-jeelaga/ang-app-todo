import { Observable } from "rxjs";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { TodosModule } from "./todos/todos.module";
import { SharedModule } from "./shared/shared.module";
import { IndexComponent } from "./index/index.component";
import { ObservablesModule } from "./observables/observables.module";
import { ModulesDemoModule } from "./modules-demo/modules-demo.module";
import { ComponentsTemplatesModule } from "./components-templates/components-templates.module";
import { CounterOneModule } from "./counter-one/counter-one.module";
import { CounterTwoModule } from "./counter-two/counter-two.module";

@NgModule({
  declarations: [AppComponent, IndexComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    ComponentsTemplatesModule,
    FormsModule,
    ObservablesModule,
    ModulesDemoModule,
    CounterOneModule.forRoot(),
    CounterTwoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
