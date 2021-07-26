import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(
    private http:HttpClient
  ) { }

  sendMessageLembrete(token:string,msg:string):Observable<any>{
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    return this.http.post<any[]>(`${environment.api}/visitante/enviarlembrete`,msg,{headers:headers})
  }
}
