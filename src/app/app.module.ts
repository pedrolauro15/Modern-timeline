import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineCardComponent } from './timeline-card/timeline-card.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { StatusPipe } from './pipes/status.pipe';
import { TimelineExpandedCardComponent } from './timeline-expanded-card/timeline-expanded-card.component';
import { InfoComponent } from './timeline-expanded-card/info/info.component';
import { SemInformacaoPipe } from './pipes/sem-informacao.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimelineItemComponent,
    TimelineCardComponent,
    TooltipComponent,
    StatusPipe,
    TimelineExpandedCardComponent,
    InfoComponent,
    SemInformacaoPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
