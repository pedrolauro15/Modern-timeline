import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwNTU5MCIsImlhdCI6MTU5OTUwMjUwMywiZXhwIjoxNTk5NTA5NzAzfQ.N4dLi1h3zs4oVUWQItRFn8KpVHQeqdDHXUjdAtzVxx4';
  baseURL =
    'https://api.tst.pep.livsaude.com.br/v1/historico-beneficiario/65505/periodos?idespecialidade=&';

  constructor(private http: HttpClient) {}

  get(page: number) {
    const result = this.http.get(
      `${this.baseURL}/page=${page}&meus_atendimentos=false`,
      {
        headers: {
          authorization: this.token,
        },
      }
    );
    return result;
  }
}
