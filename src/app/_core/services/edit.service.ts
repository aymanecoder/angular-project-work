import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appliance } from '../interfaces/Appliance';
import { Observable } from 'rxjs';
import { environement } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  apiUrl =environement.apiUrl;
  constructor(private http:HttpClient) { }
  updateAppliance(appliance: Appliance): Observable<Appliance> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    const url = `${this.apiUrl}/admin/appliance/${appliance.id}`; // Use the ID of the appliance to update

    return this.http.put<Appliance>(url, appliance, { headers });
  }

}
