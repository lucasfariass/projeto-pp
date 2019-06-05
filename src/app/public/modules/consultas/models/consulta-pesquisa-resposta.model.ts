import { Medico } from '../../medicos/models/medico.models';

export interface ConsultaPesquisaResposta {
    id?: number;
    medico: Medico;
    data: string;
    hora: string;
}
