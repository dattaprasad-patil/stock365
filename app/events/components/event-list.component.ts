import { Component, OnInit, Inject } from '@angular/core';

import { SepEvent } from "../models/sep-event";
import { SepEventsService } from "../services/sep-events.service";

@Component({
    selector: 'events-list',
    templateUrl: '../views/event-list.component.html'
})

export class EventsListComponent implements OnInit {
    constructor(@Inject(SepEventsService) private _eventsService: SepEventsService) { }
    title: string = "Synechron Events List!";
    subtitle: string = "Published by Synechron HR";
    //input property
    selectedEvent: SepEvent;
    //output property
    childMessage: string = "";

    ngOnInit(): void {
        this._eventsService.getAllEvents().subscribe(
            data => this.events = data,
            err => console.error(err),
            () => console.log("Events service call finished!")
        );
    }

    onEventSelection(event: SepEvent): void {
        this.selectedEvent = event;
    }

    onChildConfirmation(msg: string): void {
        this.childMessage = msg;
    }

    events: SepEvent[] = []
}