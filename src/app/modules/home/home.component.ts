import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
