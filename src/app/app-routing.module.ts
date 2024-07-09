import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: 'full' },
  {
    path: "auth", component: AuthComponent,
    children: [
      {
        path: "", component: LoginComponent, data: {}
      }
    ]
  },
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
