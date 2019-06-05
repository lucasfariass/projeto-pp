import { Injectable } from '@angular/core';
import { MedicosSelect } from '../models/medicos-select.model';
import { of, Observable } from 'rxjs';
import { Consulta } from '../models/consulta.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConsultaPesquisaResposta } from '../models/consulta-pesquisa-resposta.model';

const ENDPOINTS = {
  medico: 'medico',
  consulta: 'consulta'
};

@Injectable()
export class ConsultasService {

  params: HttpParams;

  constructor(
    private http: HttpClient
  ) { }

  getMedicos(): Observable<Array<MedicosSelect>> {
    return this.http.get<Array<MedicosSelect>>(`${environment.API_URL}/${ENDPOINTS.medico}/select`);
  }

  getConsultas(filtrosConsulta): Observable<Array<ConsultaPesquisaResposta>> {
    this.params = new HttpParams();
    this.getParams(filtrosConsulta);
    return this.http.get<Array<ConsultaPesquisaResposta>>(`${environment.API_URL}/${ENDPOINTS.consulta}`, { params: this.params });
  }

  cadastrarConsulta(consulta: Consulta) {
    return this.http.post(`${environment.API_URL}/${ENDPOINTS.consulta}`, consulta);
  }

  getParams(params) {
    Object.keys(params).map(key => {
      if (params[key] || params[key] === false || params[key] === 0) {
        this.params = this.params.set(key, params[key]);
      }
    });
  }
}
