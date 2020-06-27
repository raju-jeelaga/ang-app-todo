import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DisplayDataComponent } from "./display-data/display-data.component";
import { DisplayDataUrlComponent } from "./display-data-url/display-data-url.component";
import { TemplateSyntaxComponent } from "./template-syntax/template-syntax.component";
import { HeroDetailsComponent } from "./hero-details/hero-details.component";
import { CustomEventsComponent } from "./custom-events/custom-events.component";
import { DisplayHeroComponent } from "./display-hero/display-hero.component";
import { HeroBioComponent } from "./hero-bio/hero-bio.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './attribute-directives/highlight.directive';
import { HighlightV1Directive } from './attribute-directives/highlight-v1.directive';
import { HighlightV2Directive } from './attribute-directives/highlight-v2.directive';
import { HighlightV3Directive } from './attribute-directives/highlight-v3.directive';
import { ReverseIfDirective } from './structural-directives/reverse-if.directive';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { CountdownParentWithTempRefVarComponent } from './countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentWithViewChildComponent } from './countdown-parent-with-view-child/countdown-parent-with-view-child.component';
import { SimpleTodoComponent } from './simple-todo/simple-todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { UserCycleComponent } from './user-cycle/user-cycle.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FormatNamePipe } from './pipes/format-name.pipe';
import { FlyingHerosPurePipe } from './pipes/flying-heros-pure.pipe';
import { FlyingHerosImpurePipe } from './pipes/flying-heros-impure.pipe';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';

@NgModule({
  declarations: [
    DisplayDataComponent,
    DisplayDataUrlComponent,
    TemplateSyntaxComponent,
    HeroDetailsComponent,
    CustomEventsComponent,
    DisplayHeroComponent,
    HeroBioComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    HighlightDirective,
    HighlightV1Directive,
    HighlightV2Directive,
    HighlightV3Directive,
    ReverseIfDirective,
    ComponentInteractionComponent,
    CountdownParentWithTempRefVarComponent,
    CountdownTimerComponent,
    CountdownParentWithViewChildComponent,
    SimpleTodoComponent,
    TodoDetailComponent,
    LifecycleHooksComponent,
    UserCycleComponent,
    PipesComponent,
    ExponentialStrengthPipe,
    FormatNamePipe,
    FlyingHerosPurePipe,
    FlyingHerosImpurePipe,
    CustomPipePipe,
  ],
  imports: [CommonModule, FormsModule],
})
export class ComponentsTemplatesModule {}
