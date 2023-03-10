import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstPageComponentComponent } from './first-page-component/first-page-component.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParametersPageComponent } from './parameters-page/parameters-page.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponentComponent,
    SecondPageComponent,
    PageNotFoundComponent,
    ParametersPageComponent,
    ProtectedPageComponent,
    LoginComponent
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
