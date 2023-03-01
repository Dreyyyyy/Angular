import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MultiplyByPipe } from './multiply-by.pipe';
import { CustomizedPipeComponent } from './customized-pipe/customized-pipe.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { ListRenderingComponent } from './list-rendering/list-rendering.component';
import { PersonalizedComponentComponent } from './personalized-component/personalized-component.component';
import { FatherComponentComponent } from './father-component/father-component.component';
import { SonComponentComponent } from './son-component/son-component.component';
import { Service1ExampleComponent } from './service1-example/service1-example.component';
import { Service2ExampleComponent } from './service2-example/service2-example.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeCycleFatherComponent } from './life-cycle-father/life-cycle-father.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    MultiplyByPipe,
    CustomizedPipeComponent,
    TwoWayDataBindingComponent,
    ListRenderingComponent,
    PersonalizedComponentComponent,
    FatherComponentComponent,
    SonComponentComponent,
    Service1ExampleComponent,
    Service2ExampleComponent,
    LifeCycleComponent,
    LifeCycleFatherComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
