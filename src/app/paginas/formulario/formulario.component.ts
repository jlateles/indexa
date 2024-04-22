import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  contatoForm!: FormGroup;

  constructor(){
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
    if (this.contatoForm.valid) {
      console.log(this.contatoForm.value);

    }

  }

  cancelar(){
    console.log('Submissão cancelada!')
  }
}
