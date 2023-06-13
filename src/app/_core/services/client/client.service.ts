import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/environments/environment';
import { Client } from '../../interfaces/clients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl=environement.apiUrl ;
  constructor(private http:HttpClient) { }

  getClients():Observable<Client[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      return this.http.get<Client[]>(`${this.apiUrl}/admin/clients`,{headers});

  }




  addClient(client: Client): Observable<Client> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }


      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })


    return this.http.post<Client>(`${this.apiUrl}/admin/client`, client,{headers: headers});
  }

  updateClient(client: Client): Observable<Client> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    const url = `${this.apiUrl}/admin/client/${client.id}`; // Use the ID of the appliance to update

    return this.http.put<Client>(url, client, { headers });
  }



  deleteClient(id: number) {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    const url = `${this.apiUrl}/admin/client/${id}`;
    return this.http.delete(url,{headers: headers});
  }


}
