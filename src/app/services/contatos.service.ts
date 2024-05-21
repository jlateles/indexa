import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private contatos: Contato[] = [
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583", "email": "bruno@email.com"},
    {"id": 4, "nome": "Beatriz", "telefone": "25 854986459", "email": "bia@email.com"},
    {"id": 12, "nome": "Fernanda", "telefone": "36 286892946", "email": "nanda@email.com"},
  ]

  constructor() {
    //tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const  contatosLocalStorage =  contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null; //convertendo de string para objetos

    this.contatos = contatosLocalStorage || this.contatos;

    // salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos(): Contato[]{
    return this.contatos;
  }

  salvarContato(contato: Contato){
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

}
