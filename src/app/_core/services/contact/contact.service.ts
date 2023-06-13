import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from 'src/environments/environment';
import { Contact } from '../../interfaces/Contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {



  apiUrl=environement.apiUrl ;
  constructor(private http:HttpClient) { }

  getContacts():Observable<Contact[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      return this.http.get<Contact[]>(`${this.apiUrl}/admin/contacts`,{headers});

  }




  addContact(contact: Contact): Observable<Contact> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }


      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })


    return this.http.post<Contact>(`${this.apiUrl}/admin/contact`, contact,{headers: headers});
  }

  updateContact(contact: Contact): Observable<Contact> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    const url = `${this.apiUrl}/admin/contact/${contact.id}`; // Use the ID of the appliance to update

    return this.http.put<Contact>(url, contact, { headers });
  }



  deleteContact(id: number) {
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
