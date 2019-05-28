import { Injectable } from '@angular/core';
import { MedicosSelect } from '../models/medicos-select.model';
import { of } from 'rxjs';

@Injectable()
export class ConsultasService {

  constructor() { }

  getMedicos() {
    const medicos: Array<MedicosSelect> = [
      {
        id: 0,
        nome: 'José'
      },
      {
        id: 1,
        nome: 'Xico'
      },
      {
        id: 2,
        nome: 'João'
      },
      {
        id: 3,
        nome: 'Maria'
      }
    ];

    return of(medicos);
  }
}
