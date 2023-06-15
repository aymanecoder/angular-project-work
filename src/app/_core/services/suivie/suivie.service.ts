import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/environments/environment';
import { Suivie } from '../../interfaces/Suivie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuivieService {

  apiUrl=environement.apiUrl ;
  constructor(private http:HttpClient) { }

  getSuivies():Observable<Suivie[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      return this.http.get<Suivie[]>(`${this.apiUrl}/manager/suivies`,{headers});

  }




  addSuivie(suivie: Suivie): Observable<Suivie> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }


      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })


    return this.http.post<Suivie>(`${this.apiUrl}/manager/suivie`, suivie,{headers: headers});
  }

  updateSuivie(suivie: Suivie): Observable<Suivie> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    const url = `${this.apiUrl}/manager/suivie/${suivie.id}`; // Use the ID of the appliance to update

    return this.http.put<Suivie>(url, suivie, { headers });
  }



  deleteSuivie(id: number) {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    const url = `${this.apiUrl}/manager/suivie/${id}`;
    return this.http.delete(url,{headers: headers});
  }
}
