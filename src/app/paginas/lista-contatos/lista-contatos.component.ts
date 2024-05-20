import { ContatosService } from './../../services/contatos.service';
import { Component } from '@angular/core';

interface Contato {
  id: number
  nome: string
  telefone: string
}
@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = [];

  filtroPorTexto: string = '';
  ContatosService: any;

  constructor(private contatosService: ContatosService){
    this.contatos = this.contatosService.obterContatos()
  }

  // Remove os acentos de uma string
  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto (): Contato[]{
    if (!this.filtroPorTexto){
      return this.contatos
    }
    return this.contatos.filter(contato => {
      // Compara os nomes sem acentuações
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    })
  }

  filtrarContatosPorLetraInicial(letra:string) : Contato[]{
    return this.filtrarContatosPorTexto().filter( contato => {
      // Compara a letra inicial sem considerar acentuações
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase());
    })
  }
}
