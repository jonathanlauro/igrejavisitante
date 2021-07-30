import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { VisitanteService } from './visitante.service';
import {Router} from "@angular/router"
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CadastroVisitanteComponent } from './cadastro-visitante/cadastro-visitante.component';

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent implements OnInit {

  listaVisitantes:any=[];
  colunas:String[] = ['id','nome','telefone','email','dataVisita']
  colunas2:String[] = ['id','nome','telefone','dataVisita']
  token:any;

  constructor(
    private _snackBar: MatSnackBar,
    private visitanteService:VisitanteService,
    private router:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
    this.buscarVisitantes(this.token);
  }

  buscarVisitantes(token:string){
    this.visitanteService.listarVisitantes(token).subscribe(
      (res)=>{
        this.listaVisitantes = res;
       
        console.log(this.listaVisitantes)
      },
      (error)=>{
        this.openSnackBar("Sua Sessão expirou","X",true);
        this.router.navigate(['/login'])
      }
    );
  }

  showModalDialog(){
    const ref = this.dialog.open(CadastroVisitanteComponent);
    ref.afterClosed().subscribe(()=>{
      this.buscarVisitantes(this.token)
    })
  }








  openSnackBar(message: string, action: string, isError:boolean) { 
    this._snackBar.open(message, action,{duration: 2000,panelClass: [isError ? 'snackbar-error' : 'snackbar-success']});
  }
}
