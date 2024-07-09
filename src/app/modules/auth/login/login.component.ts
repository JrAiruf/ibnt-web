import { Component } from '@angular/core';
import { LoginEntity } from '../entities/login-entity';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthEntity } from '../entities/auth-entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(private readonly service: AuthService, private readonly router: Router) { }

  loginEntity: LoginEntity = new LoginEntity()
  authEntity?: AuthEntity

  onSubmit() {
    this.service.login(this.loginEntity).subscribe((value) => {
      this.authEntity = value;
      if (value.token) {
        console.log(value.token)
        this.router.navigate(["/home"]);
      }
    });
  }
}
