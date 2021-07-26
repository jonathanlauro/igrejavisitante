import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LembreteService } from './lembrete.service';

@Component({
  selector: 'app-lembrete',
  templateUrl: './lembrete.component.html',
  styleUrls: ['./lembrete.component.css']
})
export class LembreteComponent implements OnInit {

  msg = '';
  token:any;

  constructor(
    private _snackBar:MatSnackBar,
    private lembreteService:LembreteService
  ) { }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token');
  }

  onSubmit(){
    if(this.msg == ''){
      this.openSnackBar("Preencha o campo data por favor!","",true);
      return console.error('msg não pode ficar vazia');
    }
    this.lembreteService.sendMessageLembrete(this.token,this.msg).subscribe(()=>{
      this.openSnackBar("Menssagens enviada!","",false);
    }, error =>{
      this.openSnackBar(error,"",true);
    })
  }

  openSnackBar(message: string, action: string, isError:boolean) { 
    this._snackBar.open(message, action,{duration: 2000,panelClass: [isError ? 'snackbar-error' : 'snackbar-success']});
  }
}
