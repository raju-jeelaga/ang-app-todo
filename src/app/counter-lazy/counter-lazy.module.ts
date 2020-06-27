import { CounterOneModule } from "./../counter-one/counter-one.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CounterLazyRoutingModule } from "./counter-lazy-routing.module";
import { CounterHomeComponent } from "./counter-home/counter-home.component";

@NgModule({
  declarations: [CounterHomeComponent],
  imports: [CommonModule, CounterLazyRoutingModule, CounterOneModule],
})
export class CounterLazyModule {}
