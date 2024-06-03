import { ContatosService } from './../../services/contatos.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-contato',
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit{

  contato: Contato = {
    id: 0,
    nome: '',
    avatar: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
    private ContatosService: ContatosService,
    private router: Router
  ) {}

  ngOnInit() {
   const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ContatosService.buscarPorId(parseInt(id!)).subscribe((contato) => {
      this.contato = contato
    })
  }

  excluir(){
    this.ContatosService.excluirContato(this.contato.id).subscribe((contato) => {
      this.router.navigateByUrl('/lista-contatos')
    })
  }

}
