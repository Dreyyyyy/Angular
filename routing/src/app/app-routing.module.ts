import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstPageComponentComponent } from './first-page-component/first-page-component.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParametersPageComponent } from './parameters-page/parameters-page.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {path: "first-page", component: FirstPageComponentComponent},
  {path: "second-page", component: SecondPageComponent},
  {path: "", redirectTo: "first-page", pathMatch: "full"},
  {path: "parameters-page/:id", component: ParametersPageComponent},
  {path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)},
  {path: "protected-page", component: ProtectedPageComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "**", component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
