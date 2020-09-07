interface Procedimento {
  ccodipmed: string | number;
  cnomepmed: string;
}

export interface Historico {
  agendamento_data: string | Date;
  agendamento_id: string | number;
  agendamento_situacao: string;
  ambulatorio_nome: string;
  anamnese: null;
  atestados: any[];
  beneficiario_data_inclusao: string | Date;
  beneficiario_id: string | number;
  cids: any[];
  encaminhamentos: any[];
  especialidade_id: string | number;
  especialidade_nome: string;
  evolucao: string | null;
  guia_id: string | number;
  indicacao: null;
  observacao: string;
  prescricao: string;
  prestador_codigo_conselho: string | number;
  prestador_conselho: string | number;
  prestador_estado: string;
  prestador_id: string | number;
  prestador_nome: string;
  procedimentos: Procedimento[];
  procedimentos_grupo: any[];
  receitas: any[];
}
