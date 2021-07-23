import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgradecimentoService {

  constructor(
    private http:HttpClient
  ) { }

  sendMessage(token:string,data:string):Observable<any>{
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    return this.http.get<any[]>(`${environment.api}/visitante/enviar/${data}`,{headers:headers})
  }
}
