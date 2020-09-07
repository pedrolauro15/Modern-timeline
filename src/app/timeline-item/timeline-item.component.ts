import { Component, OnInit, Input } from '@angular/core';
import { Historico } from '../models/historico.model';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent implements OnInit {
  @Input() data: Historico;

  constructor() {}

  ngOnInit(): void {}
}
