import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AusenciaService } from './ausencia.service';


@Component({
  selector: 'app-ausencia',
  templateUrl: './ausencia.component.html',
  styleUrls: ['./ausencia.component.css']
})
export class AusenciaComponent implements OnInit {
  data:''='';
  token:any;

  constructor(
    private _snackBar: MatSnackBar,
    private ausenciaService:AusenciaService
  ) { }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
  }


  enviarMsgAusencia(){
    if(this.data == undefined || this.data == ''){
      this.openSnackBar("Preencha o campo data por favor!","",true);
      return;
    }
    this.ausenciaService.sendMessageAusencia(this.token,this.data).subscribe(()=>{
      this.openSnackBar("Menssagens enviada!","",false);
    })
  }





  openSnackBar(message: string, action: string, isError:boolean) { 
    this._snackBar.open(message, action,{duration: 2000,panelClass: [isError ? 'snackbar-error' : 'snackbar-success']});
  }
}
