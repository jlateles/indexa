import { ContatosService } from './../../services/contatos.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  contatoForm!: FormGroup;


  constructor(private ContatosService: ContatosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this.inicializarFormulario();
    this.carregarContato();

  }


  inicializarFormulario(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', [Validators.required,  Validators.minLength(9)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  carregarContato() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ContatosService.buscarPorId(parseInt(id!)).subscribe((contato) => {
      // Se a data de aniversário existir, formate-a
      if (contato.aniversario) {
        contato.aniversario = format(new Date(contato.aniversario), 'yyyy-MM-dd');
      }
      this.contatoForm.patchValue(contato)
    })
  }

  salvarContato(){
    const novoContato = this.contatoForm.value;

    // Formatando a data de aniversário para o formato dd/MM/yyyy antes de salvar
    if (novoContato.aniversario) {
      novoContato.aniversario = format(new Date(novoContato.aniversario), 'dd/MM/yyyy');
    }

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    novoContato.id = id ? parseInt(id) : null

    this.ContatosService.editarOuSalvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos')
    });
  }

  cancelar(){
    this.contatoForm.reset();
  }
}
