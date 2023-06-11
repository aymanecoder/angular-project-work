import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  apiUrl = environement.apiUrl;
  constructor(private http:HttpClient) { }


  deleteAppliance(id: number) {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    const url = `${this.apiUrl}/admin/appliance/${id}`;
    return this.http.delete(url,{headers: headers});
  }
}
