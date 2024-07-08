import { Component } from '@angular/core';
import { LoginEntity } from '../entities/login-entity';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  loginEntity: LoginEntity = new LoginEntity()

  onSubmit() {
    console.log(this.loginEntity.email)
    console.log(this.loginEntity.password)
  }
}
