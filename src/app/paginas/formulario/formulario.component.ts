import { ContatosService } from './../../services/contatos.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  contatoForm!: FormGroup;

  constructor(private ContatosService: ContatosService,
    private router: Router
  ){}

  ngOnInit(){
    this.inicializarFormulario();
  }

  inicializarFormulario(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', [Validators.required,  Validators.minLength(9)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl('', Validators.required),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  salvarContato(){
    const novoContato = this.contatoForm.value;
    this.ContatosService.salvarContato(novoContato);
    this.contatoForm.reset();
    this.router.navigateByUrl('/src/app/paginas/lista-contatos')
  }

  cancelar(){
    this.contatoForm.reset();
  }
}
