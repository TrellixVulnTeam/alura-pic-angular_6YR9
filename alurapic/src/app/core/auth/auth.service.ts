import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { UserService } from './user.service';
const URL_API = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  login(userName: string, password: string) {
    return this.http.post(`${URL_API}/user/login`, { userName, password }, { observe: 'response' })
      .pipe(
        tap(res => {
          const authToken = res.headers.get('x-access-token');
          if (authToken) {
            this.userService.setToken(authToken);
          }
        }));
  }
}
