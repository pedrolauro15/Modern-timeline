import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  statusList = [
    {
      tag: 'DP',
      descricao: 'Disponível',
    },
    {
      tag: 'A',
      descricao: 'Agendado',
    },
    {
      tag: 'F',
      descricao: 'Faltou',
    },
    {
      tag: 'D',
      descricao: 'Desistiu',
    },
    {
      tag: 'M',
      descricao: 'Atendido',
    },
    {
      tag: 'AM',
      descricao: 'Em atendimento',
    },
    {
      tag: 'R',
      descricao: 'Aguardando',
    },
    {
      tag: 'ET',
      descricao: 'Em triagem',
    },
    {
      tag: 'T',
      descricao: 'Triado',
    },
  ];
  transform(value: string, ...args: unknown[]): unknown {
    return (
      this.statusList.find((a) => a.tag === value).descricao || 'Sem status'
    );
  }
}
