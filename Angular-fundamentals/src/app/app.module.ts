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

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    MultiplyByPipe,
    CustomizedPipeComponent,
    TwoWayDataBindingComponent,
    ListRenderingComponent,
    PersonalizedComponentComponent
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
