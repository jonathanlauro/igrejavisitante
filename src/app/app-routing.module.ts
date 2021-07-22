import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AgradecimentoComponent } from './agradecimento/agradecimento.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VisitanteComponent } from './visitante/visitante.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {path: '', component: BemVindoComponent},
      { path: 'usuario',component: UsuarioComponent},
      { path: 'visitante',component: VisitanteComponent},
      { path: 'agradecimento',component: AgradecimentoComponent}
    ],
    canActivate:[AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children:[
      { path:'', redirectTo: 'login', pathMatch: 'full'},
      { path:'login', component: LoginComponent},
      { path: 'create-account',component: CreateAccountComponent},
      { path:'**', redirectTo: 'login', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
