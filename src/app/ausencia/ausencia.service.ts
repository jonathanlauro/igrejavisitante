import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AusenciaService {

  constructor(
    private http:HttpClient
  ) { }

  sendMessageAusencia(token:string,data:string):Observable<any>{
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    return this.http.get<any[]>(`${environment.api}/visitante/enviarAusencia/${data}`,{headers:headers})
  }
}
