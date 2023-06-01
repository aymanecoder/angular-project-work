import { Injectable } from '@angular/core';
import { environement } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, startWith, tap } from 'rxjs';
import {loginResponse}  from '../interfaces/loginResponse';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl= environement.apiUrl;

  constructor(private http: HttpClient,private router: Router) {

  }
   headers=new HttpHeaders ({
    "No-Auth": "True"

  })

  login(email: string, password: string): Observable<loginResponse>  {
    return this.http.post<loginResponse>(`${this.apiUrl}/auth/login`, {
      email,
      password
    }).pipe(
      tap(res=>console.log(res))
    );
  }


  isAuthenticated(): boolean {
    const jwt = localStorage.getItem('access_token');
    return !!jwt; // return true if the jwt token is present
  }
  getUserRole(): string | null {
    const jwt = localStorage.getItem('access_token');
    if (!jwt) {
      return null;
    }
    const jwtPayload = JSON.parse(atob(jwt.split('.')[1]));
      return jwtPayload.role;
  }
}
