import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { VisitanteService } from './visitante.service';
import {Router} from "@angular/router"
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CadastroVisitanteComponent } from './cadastro-visitante/cadastro-visitante.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent implements OnInit,AfterViewInit {

  listaVisitantes:any=[];
  colunas:String[] = ['id','nome','telefone','email','dataVisita']
  colunas2:String[] = ['id','nome','telefone','dataVisita']
  token:any;
  dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;


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

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  buscarVisitantes(token:string){
    this.visitanteService.listarVisitantes(token).subscribe(
      (res)=>{
        this.listaVisitantes = res;
        this.dataSource = new MatTableDataSource(this.listaVisitantes);
        this.dataSource.paginator = this.paginator;
        // console.log(this.listaVisitantes)
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
