import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultasService } from '../../services/consultas.service';
import { MedicosSelect } from '../../models/medicos-select.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-consultas',
  templateUrl: './form-consultas.component.html',
  styleUrls: ['./form-consultas.component.css']
})
export class FormConsultasComponent implements OnInit {

  formConsulta: FormGroup;
  medicosSelect: Array<MedicosSelect>;

  constructor(
    private fb: FormBuilder,
    private consultasService: ConsultasService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.criarForm();
    this.recuperarMedicos();
  }

  criarForm() {
    this.formConsulta = this.fb.group({
      idMedico: [null, Validators.required],
      data: [null, Validators.required],
      hora: [null, Validators.required]
    });
  }

  salvarConsulta() {
    if (this.formConsulta.valid) {
      this.consultasService.cadastrarConsulta(this.formConsulta.getRawValue()).
        subscribe(
          (res) => {
            this.toastrService.success('Consulta cadastrada com sucesso!');
          },
          (error) => {
            this.toastrService.error('Erro ao cadastrar uma consulta.');
          }
        );
    } else {
      this.toastrService.error('Campos obrigatorios não preenchidos');
    }
  }

  recuperarMedicos() {
    this.consultasService.getMedicos().
      subscribe(
        (res) => {
          this.medicosSelect = res;
        }
      );
  }

}
