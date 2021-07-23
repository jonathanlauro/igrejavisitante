import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from "@angular/router"
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CadastroComponent } from './cadastro/cadastro.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaUsuarios:any=[];
  colunas:String[] = ['id','login','email']
  showDialog:boolean = false;
  token:any;
  constructor(
    private usuarioService:UsuarioService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
    this.buscarUsuarios(this.token);
  }

  buscarUsuarios(token:string){
    this.usuarioService.listarUsuarios(token).subscribe(
      (res)=>{
        this.listaUsuarios = res;
       
        console.log(this.listaUsuarios)
      },
      (error)=>{
        this.openSnackBar("Sua Sessão expirou","X",true);
        this.router.navigate(['/login'])
      }
    );
  }
 
  showModalDialog():void{
    const ref = this.dialog.open(CadastroComponent);
    ref.afterClosed().subscribe(()=>{
      this.buscarUsuarios(this.token)
    })
  }

  openSnackBar(message: string, action: string, isError:boolean) { 
    this._snackBar.open(message, action,{duration: 2000,panelClass: [isError ? 'snackbar-error' : 'snackbar-success']});
  }
}
