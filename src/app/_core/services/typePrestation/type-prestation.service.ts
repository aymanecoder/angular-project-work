import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tps } from '../../interfaces/Tps';
import { Observable, Subject, tap } from 'rxjs';
import { environement } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypePrestationService {
  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$(){
    return this._refreshNeeded$;

  }
  apiUrl=environement.apiUrl ;
  constructor(private http:HttpClient) { }

  getTps():Observable<Tps[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      return this.http.get<Tps[]>(`${this.apiUrl}/admin/Tps`,{headers});

  }




  addTps(Tps: Tps): Observable<Tps> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }


      const headers = new HttpHeaders({
        'Content-Tps': 'application/json',
        Authorization: `Bearer ${token}`
      })


    return this.http.post<Tps>(`${this.apiUrl}/admin/Tp`, Tps,{headers: headers})
    .pipe(
      tap(() =>{
        this._refreshNeeded$.next();
      })
    );
  }

  updateTps(Tps: Tps): Observable<Tps> {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Tps': 'application/json',
      Authorization: `Bearer ${token}`
    });

    const url = `${this.apiUrl}/admin/Tp/${Tps.id}`; // Use the ID of the appliance to update

    return this.http.put<Tps>(url, Tps, { headers });
  }



  deleteTps(id: number) {
    const token = localStorage.getItem('access_token'); // Check for JWT in local storage

    if (!token) {
      throw new Error('Authorization token not found');
    }

    const headers = new HttpHeaders({
      'Content-Tps': 'application/json',
      Authorization: `Bearer ${token}`
    });
    const url = `${this.apiUrl}/admin/Tp/${id}`;
    return this.http.delete(url,{headers: headers});
  }
}

