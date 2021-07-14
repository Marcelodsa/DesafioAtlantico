import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authGuard';
import { ComentariosComponent } from './pagina/comentarios/comentarios.component';
import { LinhaTempoComponent } from './pagina/linha-tempo/linha-tempo.component';
import { LoginComponent } from './pagina/login/login.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", component: LoginComponent},
  {path: "linha-tempo", component: LinhaTempoComponent, canActivate: [AuthGuard]},
  {path: "comentarios", component: ComentariosComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    AuthGuard
  ]
})
export class AppRoutingModule { }
