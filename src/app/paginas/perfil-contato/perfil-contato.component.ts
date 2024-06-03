import { Component, OnInit } from '@angular/core';
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-contato',
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit{

  contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: ''
  }

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activateRoute.snapshot.paramMap.get('id')
  }

}
