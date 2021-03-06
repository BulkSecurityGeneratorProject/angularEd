import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILocation } from 'app/shared/model/location.model';

@Component({
    selector: '-location-detail',
    templateUrl: './location-detail.component.html'
})
export class LocationDetailComponent implements OnInit {
    location: ILocation;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ location }) => {
            this.location = location;
        });
    }

    previousState() {
        window.history.back();
    }
}
