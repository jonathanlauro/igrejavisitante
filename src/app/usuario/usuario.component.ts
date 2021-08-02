import { Component, OnInit,ViewChild } from '@angular/core';
import { UsuarioService } from './usuario.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from "@angular/router"
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CadastroComponent } from './cadastro/cadastro.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

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
  dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

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
        this.dataSource = new MatTableDataSource(this.listaUsuarios);
        this.dataSource.paginator = this.paginator;
       
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
