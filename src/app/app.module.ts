import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pagina/login/login.component';
import { LinhaTempoComponent } from './pagina/linha-tempo/linha-tempo.component';

import { FormsModule }   from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ComentariosComponent } from './pagina/comentarios/comentarios.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioServico } from './servicos/servicoUsuario';
import { ComentarioServico } from './servicos/servicoComentario';
import { LocalStorageServico } from './servicos/localStorageServico';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LinhaTempoComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioServico,
    ComentarioServico,
    LocalStorageServico,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
