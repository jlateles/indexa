import { Component } from '@angular/core';
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-perfil-contato',
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent {

  contato: Contato = {
    id: 0,
    nome: 'Julia',
    telefone: '(21)973044519',
    email: 'juliajulia@email.com',
    aniversario: '12/10/1999',
    redes: 'julia-dev.com'
  }

}
