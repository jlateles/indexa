import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';
import { provideHttpClient } from '@angular/common/http';
import { PerfilContatoComponent } from './paginas/perfil-contato/perfil-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormularioComponent,
    ListaContatosComponent,
    PerfilContatoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = ' indexa';
 }
