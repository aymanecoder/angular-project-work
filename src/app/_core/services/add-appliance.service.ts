import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/environments/environment';
import { Appliance } from '../interfaces/Appliance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddApplianceService {
  apiUrl=environement.apiUrl;


  constructor(private http:HttpClient) { }

  addAppliance(appliance: Appliance): Observable<Appliance> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }


      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })


    return this.http.post<Appliance>(`${this.apiUrl}/admin/appliance`, appliance,{headers: headers});
  }
}


