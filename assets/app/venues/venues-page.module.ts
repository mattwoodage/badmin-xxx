import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VenuesPageComponent } from "./venues-page.component";

@NgModule({
	declarations: [
		VenuesPageComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: []
})

export class VenuesPageModule {

}