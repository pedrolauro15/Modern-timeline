import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semInformacao',
})
export class SemInformacaoPipe implements PipeTransform {
  transform(value: string | null, ...args: unknown[]): unknown {
    return value ? value : 'Nenhum dado cadastrado';
  }
}
