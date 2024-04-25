import { Injectable } from '@angular/core';

interface Contato {
  id: number
  nome: string
  telefone: string
}

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private contatos: Contato[] = [
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583"},
    {"id": 4, "nome": "Beatriz", "telefone": "25 854986459"},
    {"id": 5, "nome": "Carlos", "telefone": "94 543197849"},
    {"id": 43, "nome": "Vitor", "telefone": "40 769490767"},
    {"id": 7, "nome": "Daniel", "telefone": "56 613692441"},
    {"id": 22, "nome": "Karina", "telefone": "74 580566400"},
    {"id": 12, "nome": "Fernanda", "telefone": "36 286892946"},
    {"id": 28, "nome": "Natália", "telefone": "71 100450583"},
  ]

  constructor() {
    //tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const  contatosLocalStorage =  contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null; //convertendo de string para objetos

    this.contatos = contatosLocalStorage || null;

    // salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos(){
    return this.contatos;
  }
}
