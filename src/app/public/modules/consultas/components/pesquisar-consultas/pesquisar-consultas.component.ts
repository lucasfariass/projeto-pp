import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConsultasService } from '../../services/consultas.service';
import { MedicosSelect } from '../../models/medicos-select.model';
import { Consulta } from '../../models/consulta.model';
import { ConsultaPesquisaResposta } from '../../models/consulta-pesquisa-resposta.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pesquisar-consultas',
  templateUrl: './pesquisar-consultas.component.html',
  styleUrls: ['./pesquisar-consultas.component.css']
})
export class PesquisarConsultasComponent implements OnInit {

  formPesquisa: FormGroup;
  medicosSelect: Array<MedicosSelect>;
  consultas: Array<ConsultaPesquisaResposta>;
  pageIndex: number;

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
    this.formPesquisa = this.fb.group({
      medico: null,
      data: null
    });
  }

  recuperarMedicos() {
    this.consultasService.getMedicos().
      subscribe(
        (res) => {
          this.medicosSelect = res;
        }
      );
  }

  resetarFormulario() {
    this.consultas = new Array<ConsultaPesquisaResposta>();
    this.formPesquisa.reset();
  }

  executarPesquisa(pagina?) {
    pagina ? this.pageIndex = pagina : this.pageIndex = 1;

    const filtros = {
      idMedico: this.formPesquisa.get('medico').value,
      data: this.formPesquisa.get('data').value,
      pagina: this.pageIndex
    };

    this.consultasService.getConsultas(filtros).
      subscribe(
        (res) => {
          if (res.length) {
            this.consultas = res;
          } else {
            this.resetarFormulario();
            this.toastrService.error('Nenhuma consulta encontrada');
          }
        }
      );
  }

  deletarConsulta(idConsulta: number) {
    this.consultasService.deleteConsulta(idConsulta).
      subscribe(
        (res) => {
          this.toastrService.success('Consulta cancelada com sucesso!');
        },
        (error) => {
          this.executarPesquisa();
        },
        () => {
          this.executarPesquisa();
        }
      );
  }

}
