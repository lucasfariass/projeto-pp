import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Medico } from '../models/medico.models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const ENDPOINTS = {
  medico: 'medico'
};
@Injectable()
export class MedicosService {

  constructor(
    private http: HttpClient
  ) { }

  salvarMedico(medico: Medico) {
    return this.http.post(`${environment.API_URL}/${ENDPOINTS.medico}`, medico);
  }
}
