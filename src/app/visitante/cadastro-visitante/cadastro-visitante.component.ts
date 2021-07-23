import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { VisitanteService } from '../visitante.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-visitante',
  templateUrl: './cadastro-visitante.component.html',
  styleUrls: ['./cadastro-visitante.component.css']
})
export class CadastroVisitanteComponent implements OnInit {
  visitante:any = {
    nome: '',
    telefone:'',
    email: ''
  }
  token:any;
  constructor(
    private _snackBar:MatSnackBar,
    private visitanteService:VisitanteService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token')
  }

  onSubmit(){
    this.visitanteService.adicionarVisitante(this.token,this.visitante).subscribe(
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
