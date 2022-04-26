import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  role:any;

  constructor() { }

  ngOnInit(): void {
    let token = window.localStorage.getItem('token');
    let tokenSplit = token.split('.');
    let usuarioString = atob(tokenSplit[1]);
    let usuario = JSON.parse(usuarioString)
    this.role = usuario.role;
  }

}
