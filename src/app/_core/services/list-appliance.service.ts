import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appliance } from '../interfaces/Appliance';
import { environement } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListApplianceService {
  apiUrl=environement.apiUrl ;
  constructor(private http:HttpClient) { }

  getAppliances():Observable<Appliance[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      return this.http.get<Appliance[]>(`${this.apiUrl}/admin/appliances`,{headers});

  }

}
