import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TodosListComponent } from "./todos/todos-list/todos-list.component";
import { AddEditComponent } from "./todos/add-edit/add-edit.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { IndexComponent } from "./index/index.component";

//custom templates
import { DisplayDataComponent } from "./components-templates/display-data/display-data.component";
import { DisplayDataUrlComponent } from "./components-templates/display-data-url/display-data-url.component";
import { TemplateSyntaxComponent } from "./components-templates/template-syntax/template-syntax.component";
import { CustomEventsComponent } from "./components-templates/custom-events/custom-events.component";
import { TwoWayBindingComponent } from "./components-templates/two-way-binding/two-way-binding.component";
import { DirectivesComponent } from "./components-templates/directives/directives.component";
import { ComponentInteractionComponent } from "./components-templates/component-interaction/component-interaction.component";
import { LifecycleHooksComponent } from "./components-templates/lifecycle-hooks/lifecycle-hooks.component";
import { PipesComponent } from "./components-templates/pipes/pipes/pipes.component";
import { ObservablesDemoComponent } from "./observables/observables-demo/observables-demo.component";
import { SubjectDemoComponent } from "./observables/subject-demo/subject-demo.component";
import { OperatorsDemoComponent } from "./observables/operators-demo/operators-demo.component";
import { DifferentOperatorsComponent } from "./observables/different-operators/different-operators.component";
import { LazyLoadingDemoComponent } from "./modules-demo/lazy-loading-demo/lazy-loading-demo.component";
import { EagerVsLazyLoadingComponent } from "./modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component";
import { CounterHomeComponent as CounterOneHomeComponent } from "./counter-one/counter-home/counter-home.component";
import { CounterHomeComponent as CounterTwoHomeComponent } from "./counter-two/counter-home/counter-home.component";

const routes: Routes = [
  { path: "index", component: IndexComponent },
  { path: "todos", component: TodosListComponent },
  { path: "add-edit", component: AddEditComponent },

  // display data
  { path: "display-data", component: DisplayDataComponent },
  { path: "display-data-url", component: DisplayDataUrlComponent },
  { path: "template-syntax", component: TemplateSyntaxComponent },
  { path: "custom-events", component: CustomEventsComponent },
  { path: "two-way-binding", component: TwoWayBindingComponent },
  { path: "directives", component: DirectivesComponent },
  { path: "component-interaction", component: ComponentInteractionComponent },
  { path: "lifecycle-hooks", component: LifecycleHooksComponent },
  { path: "pipes", component: PipesComponent },

  //Observables & Rxjs
  { path: "observables-demo", component: ObservablesDemoComponent },
  { path: "subject-demo", component: SubjectDemoComponent },
  { path: "operators", component: OperatorsDemoComponent },
  { path: "different-operators", component: DifferentOperatorsComponent },

  /* NgModules routes */
  { path: "ngmodules/lazy-loading", component: LazyLoadingDemoComponent },

  //Lazy Load Components
  {
    path: "customers",
    loadChildren: () =>
      import("./customers/customers.module").then((m) => m.CustomersModule),
  },
  {
    path: "orders",
    loadChildren: () =>
      import("./orders/orders.module").then((m) => m.OrdersModule),
  },

  // Before Angular 8 Lazy Loading Links
  // {
  //   path: "customers",
  //   loadChildren: "./customers/customers.module#CustomersModule",
  // },
  // { path: "orders", loadChildren: "./orders/orders.module#OrdersModule" },

  {
    path: "ngmodules/eager-lazy-loading",
    component: EagerVsLazyLoadingComponent,
  },
  {
    path: "ngmodules/eager-lazy-loading/counter-one-home",
    component: CounterOneHomeComponent,
  },
  {
    path: "ngmodules/eager-lazy-loading/counter-two-home",
    component: CounterTwoHomeComponent,
  },
  {
    path: "lazy-loading",
    loadChildren: () =>
      import("./counter-lazy/counter-lazy.module").then(
        (m) => m.CounterLazyModule
      ),
  },

  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
