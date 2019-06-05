import { Injectable } from '@angular/core';
import { MedicosSelect } from '../models/medicos-select.model';
import { of, Observable } from 'rxjs';
import { Consulta } from '../models/consulta.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const ENDPOINTS = {
  medico: 'medico',
  consulta: 'consulta'
};

@Injectable()
export class ConsultasService {

  constructor(
    private http: HttpClient
  ) { }

  getMedicos(): Observable<Array<MedicosSelect>> {
    return this.http.get<Array<MedicosSelect>>(`${environment.API_URL}/${ENDPOINTS.medico}/select`);
  }

  getConsultas() {
    const consultas: Array<Consulta> = new Array();

    for (let index = 0; index < 18; index++) {
      const element: Consulta = {
        idMedico: `Medico ${index}`,
        id: index,
        data: '28/05/2019',
        hora: '18:38'
      };
      consultas.push(element);
    }

    return of(consultas);
  }

  cadastrarConsulta(consulta: Consulta) {
    return this.http.post(`${environment.API_URL}/${ENDPOINTS.consulta}`, consulta);
  }
}
