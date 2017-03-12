import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarPageComponent } from "./calendar-page.component";

@NgModule({
	declarations: [
		CalendarPageComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: []
})

export class CalendarPageModule {

}