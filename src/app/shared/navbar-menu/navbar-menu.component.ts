import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  @Input()
  tipoUsuario:'ROLE_ADMIN' | 'ROLE_USER';

  constructor() { }

  ngOnInit(): void {
  }

}
