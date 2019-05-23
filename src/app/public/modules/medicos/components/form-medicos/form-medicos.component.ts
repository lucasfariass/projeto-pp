import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-medicos',
  templateUrl: './form-medicos.component.html',
  styleUrls: ['./form-medicos.component.css']
})
export class FormMedicosComponent implements OnInit {

  formMedico: FormGroup;
  formConsultorio: FormGroup;
  formEndereco: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.criarForm();
  }

  criarForm() {
    this.formMedico = this.fb.group({
      nome: [null, Validators.required],
      especialidade: [null, Validators.required]
    });

    this.formConsultorio = this.fb.group({
      nome: [null, Validators.required]
    });

    this.formEndereco = this.fb.group({
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      numero: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      complemento: [null, Validators.required]
    });
  }

}
