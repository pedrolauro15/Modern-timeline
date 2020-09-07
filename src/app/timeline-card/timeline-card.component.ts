import { Component, OnInit, Input } from '@angular/core';
import { Historico } from '../models/historico.model';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss'],
})
export class TimelineCardComponent implements OnInit {
  @Input() data: Historico;
  constructor() {}
  ngOnInit(): void {}
}
