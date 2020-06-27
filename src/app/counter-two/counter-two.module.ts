import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CounterHomeComponent } from "./counter-home/counter-home.component";
import { CounterOneModule } from "../counter-one/counter-one.module";

@NgModule({
  declarations: [CounterHomeComponent],
  imports: [CommonModule, RouterModule, CounterOneModule],
})
export class CounterTwoModule {}
