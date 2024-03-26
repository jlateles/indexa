import { Component } from '@angular/core';

interface Contato {
  id: number
  nome: string
  telefone: string
}

import agenda from './agenda.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = agenda;
}
