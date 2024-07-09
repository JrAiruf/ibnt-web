import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginEntity } from './entities/login-entity';
import { API_URL } from 'src/app/shared/constants/api_config';
import { AuthEntity } from './entities/auth-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly client: HttpClient) { }

  login(login: LoginEntity): Observable<AuthEntity> {
    return this.client.post<AuthEntity>(`${API_URL}/auth`,
      {
        "email": login.email,
        "password": login.password
      },
      {
        headers: {
          "content-type": "application/json"
        }
      }
    );
  }
}
