import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Historico } from './models/historico.model';
import { Response } from './models/response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.loadHistory();
  }

  constructor(private appService: AppService) {}
  historico: Historico[] = [];
  page = 1;
  loading = true;
  isLastPage = false;

  loadHistory() {
    this.loading = true;
    this.appService.get(this.page).subscribe((res: Response) => {
      this.historico = [...this.historico, ...res.data];
      this.loading = false;
      this.page += 1;
      if (res.size < 5) {
        this.isLastPage = true;
      }
    });
  }
}
