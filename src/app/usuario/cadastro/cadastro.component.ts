import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario :any= {
    login:'',
    email:'',
    senha:''
  }
  token:any = '';

  constructor(
    private http:HttpClient,
    private usuarioService:UsuarioService,
    private _snackBar:MatSnackBar,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
  }

  onSubmit(){
    this.usuarioService.adicionarUsuario(this.token,this.usuario).subscribe(
      (res)=>{
        this.dialog.closeAll()
        this.openSnackBar("Usuário cadastrado com sucesso","",true)
      },
      (error)=>{
        this.openSnackBar("Sua Sessão expirou","X",true);
      }
     
    )
    
  }



  openSnackBar(message: string, action: string, isError:boolean) { 
    this._snackBar.open(message, action,{duration: 2000,panelClass: [isError ? 'snackbar-error' : 'snackbar-success']});
  }
}
