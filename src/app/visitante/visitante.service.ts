import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(
    private http:HttpClient
  ) { }

  listarVisitantes(token:string):Observable<any>{
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    return this.http.get<any[]>(`${environment.api}/visitante`,{headers:headers})
  }
  adicionarVisitante(token:string,visitante:any):Observable<any>{
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    return this.http.post<any>(`${environment.api}/visitante`,visitante,{headers:headers})
  }
}
