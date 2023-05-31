import { Injectable } from '@angular/core';
import { environement } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl=environement.apiUrl;

  constructor(private http: HttpClient) {

  }

}
