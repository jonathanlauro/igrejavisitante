import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AdminGuard } from './account/shared/admin.guard';
import { AuthGuard } from './account/shared/auth.guard';
import { AgradecimentoComponent } from './agradecimento/agradecimento.component';
import { AusenciaComponent } from './ausencia/ausencia.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { KidsComponent } from './kids/kids.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { LembreteComponent } from './lembrete/lembrete.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VisitanteComponent } from './visitante/visitante.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: HomeComponent,
  //   children:[
  //     {path: '', component: BemVindoComponent},
  //     { path: 'usuario',component: UsuarioComponent},
  //     { path: 'visitante',component: VisitanteComponent},
  //     { path: 'agradecimento',component: AgradecimentoComponent},
  //     { path: 'ausencia',component: AusenciaComponent},
  //     { path: 'lembrete',component: LembreteComponent},
  //     { path: "reino-e-nosso", component: KidsComponent}
  //   ],
  //   canActivate:[AuthGuard]
  // },
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate:[AuthGuard] },
  { path: 'usuarios', loadChildren: () => import('./modules/usuarios/usuarios.module').then(m => m.UsuariosModule), canActivate:[AdminGuard] },
  {
    path: '',
    component: AuthenticationComponent,
    children:[
      { path:'', redirectTo: 'login', pathMatch: 'full'},
      { path:'login', component: LoginComponent},
      { path: 'create-account',component: CreateAccountComponent},
      { path:'**', redirectTo: 'login', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
