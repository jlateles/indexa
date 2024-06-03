import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';
import { PerfilContatoComponent } from './paginas/perfil-contato/perfil-contato.component';

const routes: Routes = [
    {
      path: 'formulario',
      component: FormularioComponent
    },
    {
      path: 'lista-contatos',
      component: ListaContatosComponent
    },
    {
      path: 'perfil-contato/:id',
      component: PerfilContatoComponent
    },
    {
      path: '',
      redirectTo: '/lista-contatos',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
