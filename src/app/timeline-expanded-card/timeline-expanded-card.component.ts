import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-expanded-card',
  templateUrl: './timeline-expanded-card.component.html',
  styleUrls: ['./timeline-expanded-card.component.scss'],
})
export class TimelineExpandedCardComponent implements OnInit {
  @Input() father: HTMLDivElement;
  @Input() cid: string | number;
  @Input() observacao: string;
  @Input() evolucao: string;
  @Input() anamnese: string;

  constructor() {}

  ngOnInit(): void {}

  toggleOpened(targetElement: HTMLDivElement): void {
    const allCards = document.querySelectorAll('.Expanded__Card');
    const allWhiteCards = document.querySelectorAll('.Card__white');

    allWhiteCards.forEach((card) => {
      if (card === this.father) {
        return;
      }
      card.classList.remove('Card__opened');
    });

    allCards.forEach((card) => {
      if (card === targetElement) {
        return;
      }
      card.classList.remove('opened');
    });

    targetElement.classList.toggle('opened');
    this.father.classList.toggle('Card__opened');
    targetElement.classList.add('implode');
  }
}
