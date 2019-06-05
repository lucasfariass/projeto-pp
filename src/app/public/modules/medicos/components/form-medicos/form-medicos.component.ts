import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MedicosService } from '../../services/medicos.service';
import { Medico } from '../../models/medico.models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-medicos',
  templateUrl: './form-medicos.component.html',
  styleUrls: ['./form-medicos.component.css']
})
export class FormMedicosComponent implements OnInit {

  formMedico: FormGroup;
  formConsultorio: FormGroup;

  constructor(
    private fb: FormBuilder,
    private medicosService: MedicosService,
    private toastrService: ToastrService
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
      nome: [null, Validators.required],
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      numero: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
    });

  }

  salvarMedico() {
    if (this.formMedico.valid && this.formConsultorio.valid) {
      this.medicosService.salvarMedico(this.montarMedico()).
        subscribe(
          (res) => {
            this.toastrService.success('Cadastrado com sucesso!');
          },
          (error) => {
            this.toastrService.error('Erro ao cadastrar um medico');
          }
        );
    } else {
      this.toastrService.error('Campos obrigatorios não preenchidos.');
    }
  }

  montarMedico() {
    const medico: Medico = {
      nome: this.formMedico.get('nome'). value,
      especialidade: this.formMedico.get('especialidade').value,
      consultorio: this.formConsultorio.getRawValue()
    };
    return medico;
  }

}
