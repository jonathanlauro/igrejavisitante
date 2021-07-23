import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http:HttpClient
  ) { }

  listarUsuarios(token:string):Observable<any>{
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    return this.http.get<any[]>(`${environment.api}/usuario`,{headers:headers})
  }
  adicionarUsuario(token:string,usuario:any):Observable<any>{
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
    })
    return this.http.post<any>(`${environment.api}/usuario`,usuario,{headers:headers})
  }
}
