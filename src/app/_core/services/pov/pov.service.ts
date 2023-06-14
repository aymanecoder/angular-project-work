import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environement } from 'src/environments/environment';
import { Pov } from '../../interfaces/Pov';

@Injectable({
  providedIn: 'root'
})
export class PovService {




  apiUrl=environement.apiUrl ;
  constructor(private http:HttpClient) { }

  getPovs():Observable<Pov[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      return this.http.get<Pov[]>(`${this.apiUrl}/manager/povs`,{headers});

  }




  addPov(pov: Pov): Observable<Pov> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }


      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })


    return this.http.post<Pov>(`${this.apiUrl}/manager/pov`, pov,{headers: headers});
  }

  updatePov(pov: Pov): Observable<Pov> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    const url = `${this.apiUrl}/manager/pov/${pov.id}`; // Use the ID of the appliance to update

    return this.http.put<Pov>(url, pov, { headers });
  }



  deletePov(id: number) {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    const url = `${this.apiUrl}/manager/pov/${id}`;
    return this.http.delete(url,{headers: headers});
  }
}
