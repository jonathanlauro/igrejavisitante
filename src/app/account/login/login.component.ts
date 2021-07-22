import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { Usuario } from './Usuario';

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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      const result:any = await this.accountService.login(this.usuario);
      console.log(`Login efetuado: ${result.token}`);

      //navego para a rota vazia novamente
      this.router.navigate(['']);
    }catch(error){
      console.log(error);
    }
  }
}
