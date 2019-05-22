import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export class FormPacienteComponent implements OnInit {

  formPaciente: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.criarForm();
  }

  criarForm() {
    this.formPaciente = this.fb.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      sexo: [null, Validators.required],
      dataNasc: [null, Validators.required],
      nomeMae: [null, Validators.required]
    });
  }

}
