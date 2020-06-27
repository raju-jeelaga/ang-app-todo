import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ObservablesDemoComponent } from "./observables-demo/observables-demo.component";
import { SubjectDemoComponent } from "./subject-demo/subject-demo.component";
import { ColorInputComponent } from "./color-input/color-input.component";
import { ColorfullTextComponent } from "./colorfull-text/colorfull-text.component";
import { OperatorsDemoComponent } from './operators-demo/operators-demo.component';
import { DifferentOperatorsComponent } from './different-operators/different-operators.component';

@NgModule({
  declarations: [
    ObservablesDemoComponent,
    SubjectDemoComponent,
    ColorInputComponent,
    ColorfullTextComponent,
    OperatorsDemoComponent,
    DifferentOperatorsComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class ObservablesModule {}
