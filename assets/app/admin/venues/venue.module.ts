import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VenuesComponent } from "./venues.component";
import { VenueComponent } from "./venue.component";
import { VenueListComponent } from "./venue-list.component";
import { VenueInputComponent } from "./venue-input.component";

import { VenueService } from "./venue.service";

@NgModule({
	declarations: [
		VenueComponent,
        VenueListComponent,
        VenueInputComponent,
        VenuesComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: [VenueService]
})

export class VenueModule {

}