import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClient, provideHttpClient } from '@angular/common/http'

@NgModule({
  declarations: [],
  providers: [
    provideHttpClient(),
    AuthService
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthComponent,
    LoginComponent,
  ],
})
export class AuthModule { }
