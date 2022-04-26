import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarMenuComponent,
    FooterComponent
  ],
  exports: [
    NavbarMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class SharedModule { }
