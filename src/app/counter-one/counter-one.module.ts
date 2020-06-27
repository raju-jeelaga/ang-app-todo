import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CountingService } from "./counting.service";

import { CounterHomeComponent } from "./counter-home/counter-home.component";
import { DisplayCountComponent } from "./display-count/display-count.component";
import { IncreaseCountComponent } from "./increase-count/increase-count.component";

@NgModule({
  declarations: [
    CounterHomeComponent,
    DisplayCountComponent,
    IncreaseCountComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [DisplayCountComponent, IncreaseCountComponent],
})
export class CounterOneModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CounterOneModule,
      providers: [CountingService],
    };
  }
}
