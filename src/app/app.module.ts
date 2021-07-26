import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { FormsModule }   from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UsuarioComponent } from './usuario/usuario.component';
import { VisitanteComponent } from './visitante/visitante.component';
import { AgradecimentoComponent } from './agradecimento/agradecimento.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { CadastroVisitanteComponent } from './visitante/cadastro-visitante/cadastro-visitante.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AusenciaComponent } from './ausencia/ausencia.component';
import { LembreteComponent } from './lembrete/lembrete.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent,
    BemVindoComponent,
    UsuarioComponent,
    VisitanteComponent,
    AgradecimentoComponent,
    CadastroComponent,
    CadastroVisitanteComponent,
    AusenciaComponent,
    LembreteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
