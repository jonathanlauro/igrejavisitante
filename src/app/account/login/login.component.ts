import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { Usuario } from './Usuario';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario = {
    login : "",
    password : ""
  };

  constructor(
    private accountService:AccountService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      const result:any = await this.accountService.login(this.usuario);
      this.openSnackBar("Bem-Vindo","",true)
      //navego para a rota vazia novamente
      this.router.navigate(['']);
    }catch(error){
      this.openSnackBar("Usuario ou senha Inválidos","X",true)
      console.log(error);
    }
  }

  openSnackBar(message: string, action: string, isError:boolean) {
    this._snackBar.open(message, action,{duration: 2000,panelClass: [isError ? 'snackbar-error' : 'snackbar-success']});
  }
}
