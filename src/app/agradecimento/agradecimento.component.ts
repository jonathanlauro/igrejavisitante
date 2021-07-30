import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgradecimentoService } from './agradecimento.service';

@Component({
  selector: 'app-agradecimento',
  templateUrl: './agradecimento.component.html',
  styleUrls: ['./agradecimento.component.css']
})
export class AgradecimentoComponent implements OnInit {
  data:''='';
  token:any;

  constructor(
    private agradecimentoService:AgradecimentoService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
  }

  enviarMsg(){
    if(this.data == undefined || this.data == ''){
      this.openSnackBar("Preencha o campo data por favor!","",true);
      return;
    }
    this.agradecimentoService.sendMessage(this.token,this.dataToString(this.data)).subscribe(()=>{
      this.openSnackBar("Menssagens enviada!","",false);
    })
  }

  dataToString(data:Date){
    let dta = data.toISOString().split('T')
    let dt = dta[0]
    let dataSt = dt.split('-')

    let dataParaString = `${dataSt[2]}-${dataSt[1]}-${dataSt[0]}`;
    return dataParaString;
    
  }

  openSnackBar(message: string, action: string, isError:boolean) { 
    this._snackBar.open(message, action,{duration: 2000,panelClass: [isError ? 'snackbar-error' : 'snackbar-success']});
  }
}
