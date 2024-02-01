import { Component } from '@angular/core';
import { TrdEvent, TrdEventType } from 'src/app/home/models/trd-event.model';
import { TrdService } from 'src/app/home/services/trd/trd.service';

@Component({
  selector: 'app-positions-container',
  templateUrl: './positions-container.component.html',
  styleUrls: ['./positions-container.component.css']
})
export class PositionsContainerComponent {

  trdEvents: TrdEvent[] = [];
  trdOpenPositions: TrdEvent[] = [];
  trdClosedPositions: TrdEvent[] = [];

  showTable: Boolean = false;
  showContainer: Boolean = true;

  constructor(private trdSvc: TrdService) {
    this.getTrdEvents();
  }

  getTrdEvents(): void {
    this.trdSvc.getLastEvents().subscribe({
      next: (events) => this.handleTrdEvents(events),
      error: (err) => console.log(err) // TODO: add error message or treatment
    });
  }

  handleTrdEvents(events: TrdEvent[]) {
    console.log('EVENTS', events);
    this.trdEvents = events;
    this.extractOpenPositions();
  }

  // TODO: maybe add a date validation for the second get and beyond, that way I can update only the open positions and not request everything again
  extractOpenPositions() {
    this.trdOpenPositions = [];
    this.trdClosedPositions = [];
    for (let i = 0; i < this.trdEvents.length; i++) {
      const element = this.trdEvents[i];
      switch (element.name) {
        case TrdEventType.BUY:
          this.trdOpenPositions.push(element);
          break;
        case TrdEventType.SELL:
          const foundIndex = this.trdOpenPositions.findIndex(position => position.asset === element.asset && position.quantity === element.quantity && position.initialPrice === element.initialPrice);
          this.trdClosedPositions.push(element);
          if (foundIndex >= 0) 
            this.trdOpenPositions.splice(foundIndex, 1);
          break;
        default:
          break;
      }
    }
  }

}
