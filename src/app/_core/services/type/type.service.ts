import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environement } from 'src/environments/environment';
import { Type } from '../../interfaces/Type';
@Injectable({
  providedIn: 'root'
})
export class TypeService {
  apiUrl=environement.apiUrl ;
  constructor(private http:HttpClient) { }

  getTypes():Observable<Type[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      return this.http.get<Type[]>(`${this.apiUrl}/admin/types`,{headers});

  }




  addType(type: Type): Observable<Type> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }


      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })


    return this.http.post<Type>(`${this.apiUrl}/admin/contact`, type,{headers: headers});
  }

  updateType(contact: Type): Observable<Type> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    const url = `${this.apiUrl}/admin/contact/${contact.id}`; // Use the ID of the appliance to update

    return this.http.put<Type>(url, contact, { headers });
  }



  deleteType(id: number) {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    const url = `${this.apiUrl}/admin/contact/${id}`;
    return this.http.delete(url,{headers: headers});
  }
}
