import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {catchError, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../login/Usuario';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  ngOnInit(): void{

  }

  async login(user: Usuario){
  const result:any = await this.http.post(`${environment.api}/login`,user).toPromise();
    console.log(result)
    if(result){
      window.localStorage.setItem('token',result.token);
      return true;
    }else{
      return false;
    }    
  
  }



  createAccount(account:any){
    return new Promise((resolve)=>{
      resolve(true);
    });
  }
}
