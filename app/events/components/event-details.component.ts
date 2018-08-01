//output: child to parent relation
//input: parent to child relation
//eventEmitter: to be used in case of output
import { Component, Input, Output, EventEmitter, OnChanges, Inject } from '@angular/core';

import { SepEventsService } from '../services/sep-events.service';
import { SepEvent } from '../models/sep-event';

@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})

export class EventDetailsComponent implements OnChanges {
    constructor(@Inject(SepEventsService) private _eventsService: SepEventsService) { }
    title: string = "Details of the event - "

    event: SepEvent;
    @Input("receivedEventId") eventId: number;
    @Output("onConfirmation") sendConfirmation: EventEmitter<string> = new EventEmitter<string>();

    onSendConfirmation(): void {
        this.sendConfirmation.emit("Received Event Successfully!");
    }

    ngOnChanges(): void {
        this.event = this._eventsService.getSingleEvent(this.eventId);
    }
}